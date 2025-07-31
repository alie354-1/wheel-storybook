import { db } from "../db";
import { Tool } from "../../types/admin.types";

export class ToolOwnershipService {
  static async claimTool(toolId: string, userId: string): Promise<Tool> {
    const [tool] = await db("tools_catalog_v2")
      .where({ id: toolId, ownership_status: "unclaimed" })
      .update({
        ownership_status: "claimed",
        owner_id: userId,
        claimed_at: new Date(),
        updated_by: userId,
        updated_at: new Date()
      })
      .returning("*");

    if (!tool) {
      throw new Error("Tool is already claimed or does not exist");
    }

    return tool;
  }

  static async releaseTool(toolId: string, userId: string): Promise<Tool> {
    const [tool] = await db("tools_catalog_v2")
      .where({ id: toolId, owner_id: userId })
      .update({
        ownership_status: "unclaimed",
        owner_id: null,
        claimed_at: null,
        updated_by: userId,
        updated_at: new Date()
      })
      .returning("*");

    if (!tool) {
      throw new Error("You are not the owner of this tool");
    }

    return tool;
  }

  static async verifyTool(toolId: string, userId: string): Promise<Tool> {
    const [tool] = await db("tools_catalog_v2")
      .where({ id: toolId })
      .update({
        ownership_status: "verified",
        updated_by: userId,
        updated_at: new Date()
      })
      .returning("*");

    return tool;
  }
}
