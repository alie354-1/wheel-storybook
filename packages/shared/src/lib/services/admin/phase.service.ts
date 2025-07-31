import { db } from "../db";
import { Phase } from "../../types/admin.types";

export class PhaseService {
  static async list(): Promise<Phase[]> {
    const { data, error } = await db.from("journey_phases_new").select("*").order("order_index", { ascending: true });
    if (error) throw error;
    return data;
  }

  static async get(id: string): Promise<Phase | null> {
    const { data, error } = await db.from("journey_phases_new").select("*").eq("id", id).single();
    if (error) throw error;
    return data;
  }

  static async create(data: Partial<Phase>, userId: string): Promise<Phase> {
    const { data: maxData, error: maxError } = await db.from("journey_phases_new").select("order_index").order("order_index", { ascending: false }).limit(1);
    if (maxError) throw maxError;
    const maxOrder = maxData?.[0]?.order_index || 0;
    const order_index = maxOrder + 1;

    const { data: inserted, error } = await db.from("journey_phases_new")
      .insert({
        ...data,
        order_index,
        created_by: userId,
        updated_by: userId
      })
      .select()
      .single();

    if (error) throw error;
    return inserted;
  }

  static async update(id: string, updates: Partial<Phase>, userId: string): Promise<Phase> {
    const { data, error } = await db.from("journey_phases_new")
      .update({
        ...updates,
        updated_by: userId,
        updated_at: new Date().toISOString()
      })
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  static async delete(id: string): Promise<boolean> {
    const { error, count } = await db.from("journey_phases_new").delete().eq("id", id).select("*", { count: "exact" });
    if (error) throw error;
    return (count || 0) > 0;
  }
}
