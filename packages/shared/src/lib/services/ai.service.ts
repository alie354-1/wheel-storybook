import { getGeneralLLMService, QueryContext } from './general-llm.service';
import { v4 as uuidv4 } from 'uuid';

export interface AIService {
  generateTasks: (input: any, context: QueryContext) => Promise<any>;
  generateMarketAnalysis: (idea: any, context: QueryContext) => Promise<any>;
  generateMarketSuggestions: (idea: any, context: QueryContext) => Promise<any>;
  generateIdeaVariations: (idea: any, context: QueryContext) => Promise<any>;
}

class RealAIService implements AIService {
  async generateTasks(input: any, context: QueryContext): Promise<any> {
    console.log('Generating tasks with input:', input);
    const prompt = `
      Based on the following input, generate a list of tasks.
      The output must be a JSON object with a single key, "tasks", which is an array of objects.
      Each object in the "tasks" array must have the following properties:
      - id: string
      - title: string
      - description: string
      - priority: 'low' | 'medium' | 'high'
      - status: 'pending'
      - estimated_hours: number
      - task_type: string
      - implementation_tips: string[]
      - potential_challenges: string[]
      - success_metrics: string[]
      - resources: string[]
      - learning_resources: string[]
      - tools: string[]

      Input:
      Title: ${input.goals}
      Description: ${input.working_on}

      Respond with only the JSON object. Do not include any other text or formatting.
    `;
    const llmService = getGeneralLLMService();
    console.log('Querying LLM service...');
    const response = await llmService.query(prompt, context);
    console.log('LLM service response:', response);
    
    // A real implementation would parse the response and format it as a list of tasks
    // For now, we'll just return the response directly.
    // Note: This assumes the LLM service returns data in the expected format.
    if (response && response.tasks) {
      return response;
    }

    // Fallback for mock or unexpected responses
    try {
      let content = response.content;
      // If the response is a string, try to extract the JSON part
      if (typeof content === 'string') {
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          content = JSON.parse(jsonMatch[0]);
        }
      }

      // Ensure the parsed content has the 'tasks' property
      if (content && content.tasks) {
        return { tasks: content.tasks };
      }
      // Handle cases where the parsed content is an array
      if (Array.isArray(content)) {
        return { tasks: content };
      }
      return { tasks: [] };
    } catch (e) {
      // If parsing fails, return a structured empty response
      console.error('Failed to parse AI response content:', e);
      return { tasks: [] };
    }
  }

  async generateMarketAnalysis(idea: any, context: QueryContext): Promise<any> {
    const prompt = `Generate a market analysis for the following idea: ${idea.description}`;
    const llmService = getGeneralLLMService();
    const response = await llmService.query(prompt, context);
    // a real implementation would parse the response and format it as a market analysis
    return {
      customer_profiles: [],
      early_adopters: [],
      sales_channels: [],
      pricing_insights: [],
      market_size: {},
    };
  }

  async generateMarketSuggestions(idea: any, context: QueryContext): Promise<any> {
    const prompt = `Generate market suggestions for the following idea: ${idea.description}`;
    const llmService = getGeneralLLMService();
    const response = await llmService.query(prompt, context);
    // a real implementation would parse the response and format it as market suggestions
    return {
      target_audience: [],
      sales_channels: [],
      pricing_model: [],
      customer_type: [],
      integration_needs: [],
    };
  }

  async generateIdeaVariations(idea: any, context: QueryContext): Promise<any> {
    const prompt = `Generate idea variations for the following idea: ${idea.description}`;
    const llmService = getGeneralLLMService();
    const response = await llmService.query(prompt, context);
    // a real implementation would parse the response and format it as idea variations
    return [];
  }
}

export const aiService = new RealAIService();
