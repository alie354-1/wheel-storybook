export interface IdeaPlaygroundIdea {
  id: string;
  title: string;
  description: string;
  problem_statement: string;
  solution_concept: string;
  target_audience: string[];
  unique_value: string;
  business_model: string;
  status: string;
  created_at: string;
  updated_at: string;
  user_id: string;
  protection_level?: string;
  tags: string[];
}
