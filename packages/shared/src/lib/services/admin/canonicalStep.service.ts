import { db } from "../db";
import { Step } from "@/lib/types/admin.types";

export class CanonicalStepService {
  static async list(): Promise<Step[]> {
    const { data, error } = await db.from("journey_canonical_steps").select("*").order("name", { ascending: true });
    if (error) throw error;
    return data;
  }

  static async create(payload: Partial<Step>): Promise<void> {
    const { error } = await db.from("journey_canonical_steps").insert(payload);
    if (error) throw error;
  }

  static async update(id: string, payload: Partial<Step>): Promise<void> {
    const { error } = await db.from("journey_canonical_steps").update(payload).eq("id", id);
    if (error) throw error;
  }

  static async delete(id: string): Promise<void> {
    const { error } = await db.from("journey_canonical_steps").delete().eq("id", id);
    if (error) throw error;
  }
}
