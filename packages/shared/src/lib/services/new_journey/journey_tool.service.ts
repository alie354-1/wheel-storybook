import { supabase } from '../../utils/supabaseClient';
import { JourneyStepToolRecommendation } from '../../types/new_journey.types';
import { ToolImplementationGuidance } from '../ai/tool-recommendation/orchestrator';

export const getToolRecommendationsForStep = async (stepId: string): Promise<JourneyStepToolRecommendation[]> => {
  const { data, error } = await supabase
    .from('journey_step_tool_recommendations')
    .select(`
      *,
      tool:journey_tools_catalog (*)
    `)
    .eq('canonical_step_id', stepId)
    .order('priority_rank');

  if (error) {
    console.error('Error fetching tool recommendations:', error);
    throw error;
  }

  return data || [];
};

// AI-enhanced tool recommendations
export const getAIEnhancedToolRecommendations = async (stepId: string, companyId: string) => {
  try {
    // First, get the basic tool recommendations
    const basicRecommendations = await getToolRecommendationsForStep(stepId);
    
    // For now, return these as-is with a placeholder reasoning
    // In a real implementation, this would call an AI service to enhance the recommendations
    return {
      recommendations: basicRecommendations.map(rec => ({
        ...rec,
        recommendation_type: 'primary',
        use_case_description: 'This tool is recommended based on its relevance to this step.',
        recommendation_reason: 'This tool is commonly used for this type of task.',
        estimated_time_savings: 'Approximately 2-3 hours per week',
        primary_deliverable: 'Key documentation and workflow improvements',
        workflow_position: 'Core tool for this step',
        implementation_steps: [
          'Sign up for an account',
          'Set up your initial workspace',
          'Import your existing data if applicable',
          'Configure according to your specific needs'
        ],
        best_practices: [
          'Use templates to get started quickly',
          'Integrate with your existing tools when possible',
          'Schedule regular reviews of your setup'
        ]
      })),
      reasoning: 'These tools were selected based on their relevance to the current step and your company profile.'
    };
  } catch (error) {
    console.error('Error getting AI-enhanced tool recommendations:', error);
    throw error;
  }
};

export const getToolRecommendationReason = async (
  stepId: string,
  toolId: string,
  companyId?: string
): Promise<{reason: string; stepContext: any; companyContext: any}> => {
  try {
    const { data: recommendationData, error: recError } = await supabase
      .from('journey_step_tool_recommendations_v2')
      .select('recommendation_reason')
      .eq('canonical_step_id', stepId)
      .eq('tool_id', toolId)
      .single();
    
    if (recError) {
      console.error('Error fetching recommendation reason:', recError);
    }
    
    const { data: stepData, error: stepError } = await supabase
      .from('journey_canonical_steps')
      .select('name, description, journey_domains_new(*), journey_phases_new(*)')
      .eq('id', stepId)
      .single();
    
    if (stepError) {
      console.error('Error fetching step context:', stepError);
    }
    
    let companyData = null;
    if (companyId) {
      const { data: companyInfo, error: companyError } = await supabase
        .from('companies')
        .select('name, industry, size, stage')
        .eq('id', companyId)
        .single();
      
      if (companyError) {
        console.error('Error fetching company context:', companyError);
      } else {
        companyData = companyInfo;
      }
    }
    
    return {
      reason: recommendationData?.recommendation_reason || 
              'This tool is recommended based on its relevance to your current step.',
      stepContext: stepData || null,
      companyContext: companyData || null
    };
  } catch (error) {
    console.error('Unexpected error in getToolRecommendationReason:', error);
    return {
      reason: 'This tool is recommended based on its relevance to your current step.',
      stepContext: null,
      companyContext: null
    };
  }
};

export const getToolById = async (toolId: string): Promise<any> => {
  const { data, error } = await supabase
    .from('journey_tools_catalog')
    .select('*')
    .eq('id', toolId)
    .single();
  
  if (error) {
    console.error('Error fetching tool details:', error);
    throw error;
  }
  
  return data;
};

// Tool implementation guidance
export const getToolImplementationGuidance = async (
  toolId: string, 
  stepId: string, 
  companyId: string
): Promise<ToolImplementationGuidance> => {
  try {
    // In a real implementation, this would call an AI service to get customized guidance
    // For now, return placeholder data
    return {
      toolId,
      stepId,
      companyId,
      customizedSteps: [
        'Create an account with your business email',
        'Set up your company profile with your specific industry details',
        'Import your existing data using the built-in import tools',
        'Configure notifications to align with your team\'s workflow',
        'Schedule a team onboarding session to ensure everyone knows how to use the tool'
      ],
      estimatedSetupTime: '1-2 hours',
      potentialChallenges: [
        'Initial data migration might require manual review',
        'Team adoption may vary; consider appointing a champion'
      ],
      integrationTips: [
        'Connect with your existing tools through the integrations marketplace',
        'Use the API for custom workflows if needed'
      ]
    };
  } catch (error) {
    console.error('Error getting tool implementation guidance:', error);
    throw error;
  }
};
