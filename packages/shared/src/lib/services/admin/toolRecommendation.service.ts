import { db } from "@/lib/services/db";
import { ToolRecommendation } from "@/lib/types/admin.types";

export class ToolRecommendationService {
  static async list(): Promise<ToolRecommendation[]> {
    const { data, error } = await db
      .from("journey_step_tool_recommendations_v2")
      .select(`
        *,
        tool:journey_tools_catalog (
          id,
          name
        ),
        step:journey_canonical_steps (
          id,
          name
        )
      `)
      .order("created_at", { ascending: true });
    if (error) throw error;
    return data;
  }

  static async listByStep(stepId: string): Promise<ToolRecommendation[]> {
    const { data, error } = await db.from("journey_step_tool_recommendations_v2").select("*").eq("canonical_step_id", stepId).order("created_at", { ascending: true });
    if (error) throw error;
    return data;
  }

  static async create(stepId: string, toolId: string, data: Partial<ToolRecommendation>, userId: string): Promise<ToolRecommendation> {
    const { data: inserted, error } = await db.from("journey_step_tool_recommendations_v2").insert({
        canonical_step_id: stepId,
        tool_id: toolId,
        recommendation_type: data.recommendation_type || "primary",
        recommendation_reason: data.recommendation_reason,
        created_by: userId,
        updated_by: userId
      })
      .select()
      .single();

    if (error) throw error;
    return inserted;
  }

  static async update(stepId: string, toolId: string, updates: Partial<ToolRecommendation>, userId: string): Promise<ToolRecommendation> {
    const { data, error } = await db.from("journey_step_tool_recommendations_v2")
      .update({
        ...updates,
        updated_by: userId,
        updated_at: new Date().toISOString()
      })
      .eq("canonical_step_id", stepId)
      .eq("tool_id", toolId)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  static async delete(stepId: string, toolId: string): Promise<boolean> {
    const { error, count } = await db.from("journey_step_tool_recommendations_v2").delete().eq("canonical_step_id", stepId).eq("tool_id", toolId).select("*", { count: "exact" });
    if (error) throw error;
    return (count || 0) > 0;
  }
}
