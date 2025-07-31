import { supabase } from '../../supabaseClient';

export const baseAdminService = {
  async listCanonicalSteps() {
    const { data, error } = await supabase
      .from('journey_canonical_steps')
      .select(`
        *,
        journey_phases_new(id, name, color),
        journey_domains_new(id, name, color)
      `)
      .eq('is_active', true)
      .order('order_index');

    if (error) throw error;
    return data;
  },

  async getCanonicalTasks(stepId: string) {
    const { data, error } = await supabase
      .from('journey_canonical_tasks')
      .select('*')
      .eq('canonical_step_id', stepId)
      .order('order_index');

    if (error) throw error;
    return data;
  },

  async getToolRecommendations(stepId: string) {
    const { data, error } = await supabase
      .from('journey_step_tool_recommendations_v2')
      .select(`
        *,
        tool:journey_tools_catalog (*)
      `)
      .eq('canonical_step_id', stepId);

    if (error) throw error;
    return data;
  }
};
