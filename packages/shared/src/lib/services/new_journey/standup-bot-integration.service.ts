/**
 * Standup Bot Integration Service
 * 
 * Handles the processing of standup updates, natural language analysis,
 * and extraction of task completions from user messages.
 */

import { supabase } from '../../supabase';
import { newJourneyAIService } from '../ai/new_journey_ai.service';
import { newCompanyJourneyService } from './new_company_journey.service';

interface ProcessMessageParams {
  companyId: string;
  journeyId: string;
  stepId: string;
  taskIds: string[];
  message: string;
}

interface ProcessMessageResponse {
  text: string;
  completedTaskIds: string[];
}

export const standupBotIntegrationService = {
  /**
   * Process a user's standup message to extract task completions and generate a response.
   */
  async processMessage(params: ProcessMessageParams): Promise<ProcessMessageResponse> {
    const { companyId, journeyId, stepId, taskIds, message } = params;
    
    try {
      // Save the message to the database for analysis
      await this.saveStandupMessage(companyId, stepId, message, 'user');
      
      // Process the message to detect task completions
      const completedTaskIds = await this.detectCompletedTasks(message, taskIds);
      
      // Mark any detected tasks as complete
      if (completedTaskIds.length > 0) {
        await Promise.all(completedTaskIds.map(taskId => 
          newCompanyJourneyService.updateTaskStatus(taskId, true)
        ));
      }
      
      // Generate a response based on the message and detected completions
      let responseText = '';
      
      if (completedTaskIds.length > 0) {
        const completedCount = completedTaskIds.length;
        responseText = `### Great work!\n\nI've marked **${completedCount} task${completedCount > 1 ? 's' : ''}** as complete.`;
        
        // Check if all tasks are now complete
        const remainingTasks = taskIds.filter(id => !completedTaskIds.includes(id));
        if (remainingTasks.length === 0) {
          responseText += "\n\nYou've completed all tasks for this step! Would you like to mark the entire step as complete?";
        } else {
          responseText += `\n\nYou have **${remainingTasks.length} task${remainingTasks.length > 1 ? 's' : ''}** remaining for this step.`;
        }
      } else {
        // No tasks were detected as complete
        responseText = "I've recorded your update. Is there anything specific you'd like me to mark as complete?";
      }
      
      // Save the bot's response to the database
      await this.saveStandupMessage(companyId, stepId, responseText, 'bot');
      
      return {
        text: responseText,
        completedTaskIds
      };
    } catch (error) {
      console.error('Error processing standup message:', error);
      return {
        text: "I'm having trouble processing your message. Please try again or contact support if the issue persists.",
        completedTaskIds: []
      };
    }
  },
  
  /**
   * Save a standup message to the database for future analysis and history.
   */
  async saveStandupMessage(companyId: string, stepId: string, message: string, sender: 'user' | 'bot'): Promise<void> {
    try {
      await supabase.from('new_journey_standup_sessions').insert({
        company_id: companyId,
        step_id: stepId,
        message_text: message,
        sender,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error saving standup message:', error);
      // Don't throw here - we want to continue even if logging fails
    }
  },
  
  /**
   * Analyze a message to detect which tasks have been completed.
   * This is a simplified implementation - in a real system, we would use 
   * more sophisticated NLP to detect task completions.
   */
  async detectCompletedTasks(message: string, taskIds: string[]): Promise<string[]> {
    try {
      if (taskIds.length === 0) return [];

      const { data: tasks } = await supabase
        .from('standup_tasks')
        .select('*')
        .in('id', taskIds)
        .eq('status', 'active');

      if (!tasks || tasks.length === 0) return [];

      return await newJourneyAIService.analyzeStandupMessage(message, tasks);
    } catch (error) {
      console.error('Error detecting completed tasks:', error);
      return [];
    }
  }
};
