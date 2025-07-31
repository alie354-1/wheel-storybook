/**
 * Tool recommendation orchestrator
 * Provides types and interfaces for AI-enhanced tool recommendations
 */

// Tool implementation guidance interface
export interface ToolImplementationGuidance {
  toolId: string;
  stepId: string;
  companyId: string;
  customizedSteps: string[];
  estimatedSetupTime: string;
  potentialChallenges: string[];
  integrationTips: string[];
}

// Additional types can be added here as needed
