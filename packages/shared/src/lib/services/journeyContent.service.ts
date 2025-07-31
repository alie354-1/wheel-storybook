import { supabase } from "../supabase";

interface StepTemplate {
  id?: string;
  name: string;
  description?: string;
  [key: string]: any;
}

export const journeyContentService = {
  async getAllStepTemplates() {
    const { data, error } = await supabase.from("step_templates").select("*").order("id");
    if (error) throw error;
    return data;
  },

  async upsertStepTemplate(template: StepTemplate) {
    const { data, error } = await supabase.from("step_templates").upsert(template).select();
    if (error) throw error;
    return data;
  },

  async deleteStepTemplate(id: string) {
    const { error } = await supabase.from("step_templates").delete().eq("id", id);
    if (error) throw error;
  },

  async getAllTools() {
    const { data, error } = await supabase.from("tools").select("*").order("name");
    if (error) throw error;
    return { data };
  },

  async getToolsForStep(stepInstanceId: string) {
    const { data, error } = await supabase
      .from("step_tools")
      .select("tools(*)")
      .eq("step_instance_id", stepInstanceId);
    
    if (error) throw error;
    return data.map(item => item.tools);
  },

  async assignToolsToSteps(toolIds: string[], stepInstanceIds: string[]) {
    // First, delete existing assignments for these steps
    const { error: deleteError } = await supabase
      .from("step_tools")
      .delete()
      .in("step_instance_id", stepInstanceIds);
    
    if (deleteError) throw deleteError;
    
    // Then create new assignments
    const assignments = [];
    for (const stepId of stepInstanceIds) {
      for (const toolId of toolIds) {
        assignments.push({
          step_instance_id: stepId,
          tool_id: toolId
        });
      }
    }
    
    if (assignments.length === 0) return [];
    
    const { data, error } = await supabase
      .from("step_tools")
      .insert(assignments)
      .select();
    
    if (error) throw error;
    return data;
  }
};
