import { db } from "../db";
import { Domain } from "@/lib/types/admin.types";
import { DomainStep } from "@/lib/types/domain.types";
import { supabase } from "@/lib/supabase";
import openai from "@/lib/openai-client"; // Import OpenAI client

/**
 * Get all steps for a domain.
 */
export async function getDomainSteps(domain_id: string, company_id?: string | null): Promise<DomainStep[]> {
  let query = supabase.from("domain_steps").select("*").eq("domain_id", domain_id);
  if (company_id) query = query.eq("company_id", company_id);
  const { data, error } = await query;
  if (error) throw error;
  return data;
}

/**
 * Add a step to a domain.
 */
export async function addStepToDomain(domain_id: string, step_id: string, fields: Record<string, any> = {}) {
  const { data, error } = await supabase
    .from("domain_steps")
    .insert([
      {
        domain_id,
        step_id,
        ...fields,
      },
    ])
    .select()
    .single();
  if (error) throw error;
  return data;
}

/**
 * Remove a step from a domain.
 */
export async function removeStepFromDomain(domain_id: string, step_id: string) {
  const { data, error } = await supabase
    .from("domain_steps")
    .delete()
    .eq("domain_id", domain_id)
    .eq("step_id", step_id);
  if (error) throw error;
  return data;
}

/**
 * Get suggested steps for a domain using a simple algorithm.
 * In a real implementation, this would use an LLM or more sophisticated algorithm.
 */
export async function getSuggestedStepsForDomain(domain_id: string) {
  // Get the domain
  const { data: domain, error: domainError } = await supabase
    .from("business_domains")
    .select("*")
    .eq("id", domain_id)
    .single();
  
  if (domainError || !domain) {
    throw new Error("Failed to fetch domain");
  }
  
  // Get all steps that are not already mapped to this domain
  const { data: mappedSteps, error: mappedError } = await supabase
    .from("domain_steps")
    .select("step_id")
    .eq("domain_id", domain_id);
  
  if (mappedError) {
    throw new Error("Failed to fetch mapped steps");
  }
  
  const mappedStepIds = new Set((mappedSteps || []).map(item => item.step_id));
  
  // Get all steps
  const { data: allSteps, error: stepsError } = await supabase
    .from("journey_steps")
    .select("*");
  
  if (stepsError || !allSteps) {
    throw new Error("Failed to fetch steps");
  }
  
  // Filter out already mapped steps
  const unmappedSteps = allSteps.filter(step => !mappedStepIds.has(step.id));
  
  // Mock AI scoring - in a real implementation, this would use an LLM
  return unmappedSteps.slice(0, 5).map(step => ({
    step,
    score: 0.7 + Math.random() * 0.25 // Random score between 0.7 and 0.95
  }));
}

/**
 * LLM-powered: Suggest domains for a step using OpenAI, returning ranked suggestions with explanations.
 */
export const getLLMDomainSuggestionsForStep = async (
  stepId: string,
  companyId: string | null
): Promise<{ domain: any; score: number; explanation: string }[]> => {
  // 1. Fetch the step
  const { data: step, error: stepError } = await supabase
    .from("journey_steps")
    .select("*")
    .eq("id", stepId)
    .single();
  if (stepError || !step) {
    console.error("Failed to fetch step for LLM domain suggestions:", stepError);
    return [];
  }

  // 2. Fetch all domains
  const { data: domains, error: domainsError } = await supabase
    .from("business_domains")
    .select("*")
    .is("company_id", companyId);
  if (domainsError || !domains) {
    console.error("Failed to fetch domains for LLM domain suggestions:", domainsError);
    return [];
  }

  // 3. Prepare prompt for OpenAI
  const prompt = `
You are an expert business process analyst. Given the following journey step and a list of possible business domains, rank the domains by their relevance to the step and provide a brief explanation for each score.

Journey Step:
Name: ${step.name}
Description: ${step.description || "N/A"}

Business Domains:
${domains.map((domain, i) => `Domain ${i + 1}:
Name: ${domain.name}
Description: ${domain.description || "N/A"}`).join("\n\n")}

Instructions:
- For each domain, provide a relevance score from 0 to 1 (1 = perfect fit, 0 = not relevant).
- For each domain, provide a 1-2 sentence explanation of the score.
- Return the results as a JSON array of objects: [{domainIndex, score, explanation}].
`;

  // 4. Call OpenAI
  try {
    if (!openai.apiKey) {
      throw new Error("OpenAI API key is missing. Please set VITE_OPENAI_API_KEY in your environment.");
    }
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a helpful assistant for business process mapping." },
        { role: "user", content: prompt }
      ],
      temperature: 0.2,
      max_tokens: 1200,
    });

    // Extract JSON from the response
    const responseText = completion.choices[0].message.content || "";
    const jsonStart = responseText.indexOf("[");
    const jsonEnd = responseText.lastIndexOf("]");
    if (jsonStart === -1 || jsonEnd === -1) throw new Error("No JSON array found in LLM response.");
    const jsonString = responseText.slice(jsonStart, jsonEnd + 1);
    const parsed = JSON.parse(jsonString);

    // Map results to domains
    return parsed
      .filter((r: any) => typeof r.domainIndex === "number" && domains[r.domainIndex])
      .map((r: any) => ({
        domain: domains[r.domainIndex],
        score: r.score,
        explanation: r.explanation,
      }))
      .sort((a: any, b: any) => b.score - a.score);
  } catch (err: any) {
    console.error("Failed to get LLM domain suggestions:", err);
    throw new Error(
      "OpenAI LLM call failed: " +
        (err?.message || err?.toString() || "Unknown error. Check your API key and network.")
    );
  }
};

/**
 * Batch add steps to a domain.
 * @param domain_id The domain id.
 * @param step_ids Array of step ids to add.
 * @param fields (optional) Additional fields to set on each domain_step.
 * @returns Array of created domain_step records or throws on error.
 */
export async function batchAddStepsToDomain(domain_id: string, step_ids: string[], fields: Record<string, any> = {}) {
  const inserts = step_ids.map((step_id) => ({
    domain_id,
    step_id,
    ...fields,
  }));
  const { data, error } = await supabase
    .from("domain_steps")
    .insert(inserts)
    .select();
  if (error) throw error;
  return data;
}

export class DomainService {
  static async list(): Promise<Domain[]> {
    const { data, error } = await db.from("journey_domains_new").select("*").order("name", { ascending: true });
    if (error) throw error;
    return data;
  }

  static async get(id: string): Promise<Domain | null> {
    const { data, error } = await db.from("journey_domains_new").select("*").eq("id", id).single();
    if (error) throw error;
    return data;
  }

  static async create(payload: Partial<Domain>): Promise<Domain> {
    const { data, error } = await db.from("journey_domains_new").insert(payload).select().single();
    if (error) throw error;
    return data;
  }

  static async update(id: string, payload: Partial<Domain>): Promise<Domain> {
    const { data, error } = await db.from("journey_domains_new").update(payload).eq("id", id).select().single();
    if (error) throw error;
    return data;
  }

  static async delete(id: string): Promise<boolean> {
    const { error, count } = await db.from("journey_domains_new").delete().eq("id", id).select();
    if (error) throw error;
    return true;
  }
}
