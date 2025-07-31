import { db } from "../db";
import { Task } from "@/lib/types/admin.types";

export class CanonicalTaskService {
  static async list(): Promise<Task[]> {
    const { data, error } = await db.from("journey_canonical_tasks").select("*").order("name", { ascending: true });
    if (error) throw error;
    return data;
  }

  static async listByStep(stepId: string): Promise<Task[]> {
    const { data, error } = await db.from("journey_canonical_tasks").select("*").eq("step_id", stepId);
    if (error) throw error;
    return data;
  }

  static async create(payload: Partial<Task>): Promise<void> {
    const { error } = await db.from("journey_canonical_tasks").insert(payload);
    if (error) throw error;
  }

  static async update(id: string, payload: Partial<Task>): Promise<void> {
    const { error } = await db.from("journey_canonical_tasks").update(payload).eq("id", id);
    if (error) throw error;
  }

  static async delete(id: string): Promise<void> {
    const { error } = await db.from("journey_canonical_tasks").delete().eq("id", id);
    if (error) throw error;
  }
}
