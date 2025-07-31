import { db } from "../db";
import { ImportExportJob } from "../../types/admin.types";

export class ImportExportService {
  static async createJob(data: Partial<ImportExportJob>, userId: string): Promise<ImportExportJob> {
    const { data: jobs, error } = await db
      .from("import_export_jobs")
      .insert([
        {
          ...data,
          status: "pending",
          created_by: userId,
          created_at: new Date().toISOString()
        }
      ])
      .select("*");

    if (error || !jobs || jobs.length === 0) {
      throw new Error("Failed to create job");
    }

    return jobs[0];
  }

  static async updateJobStatus(jobId: string, updates: Partial<ImportExportJob>): Promise<ImportExportJob> {
    const { data: jobs, error } = await db
      .from("import_export_jobs")
      .update({
        ...updates,
        completed_at:
          updates.status === "completed" || updates.status === "failed"
            ? new Date().toISOString()
            : undefined
      })
      .eq("id", jobId)
      .select("*");

    if (error || !jobs || jobs.length === 0) {
      throw new Error("Failed to update job");
    }

    return jobs[0];
  }

  static async getJob(jobId: string): Promise<ImportExportJob | null> {
    const { data: job, error } = await db
      .from("import_export_jobs")
      .select("*")
      .eq("id", jobId)
      .single();

    if (error) {
      return null;
    }

    return job;
  }

  static async listJobs(userId?: string): Promise<ImportExportJob[]> {
    let query = db.from("import_export_jobs").select("*").order("created_at", { ascending: false });

    if (userId) {
      query = query.eq("created_by", userId);
    }

    const { data: jobs, error } = await query;

    if (error || !jobs) {
      return [];
    }

    return jobs;
  }
}
