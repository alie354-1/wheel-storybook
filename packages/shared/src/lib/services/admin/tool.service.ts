import { db } from "../db";
import { Tool } from "@/lib/types/admin.types";

export class ToolService {
  static async list(): Promise<Tool[]> {
    const { data, error } = await db.from("journey_tools_catalog").select("*").order("name", { ascending: true });
    if (error) throw error;
    return data;
  }

  static async create(payload: Partial<Tool>): Promise<void> {
    const { error } = await db.from("journey_tools_catalog").insert(payload);
    if (error) throw error;
  }

  static async update(id: string, payload: Partial<Tool>): Promise<void> {
    const { error } = await db.from("journey_tools_catalog").update(payload).eq("id", id);
    if (error) throw error;
  }

  static async delete(id: string): Promise<void> {
    const { error } = await db.from("journey_tools_catalog").delete().eq("id", id);
    if (error) throw error;
  }
}
