import { Button } from '@wheel/ui';
import { Input } from '@wheel/ui';
import { Label } from '@wheel/ui';
import { Textarea } from '@wheel/ui';
import React, { useState } from 'react';
import { ErrorInfo } from './types';

interface ErrorFeedback {
  description: string;
  steps?: string;
  impact?: 'low' | 'medium' | 'high';
  frequency?: 'once' | 'intermittent' | 'frequent';
  contactInfo?: string;
  screenshot?: File;
}

interface ErrorFeedbackProps {
  error: Error | ErrorInfo;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  onSubmit: (feedback: ErrorFeedback) => Promise<void>;
  fields?: FeedbackField[];
  showErrorDetails?: boolean;
  anonymous?: boolean;
}

type FeedbackField = 'description' | 'steps' | 'impact' | 'frequency' | 'contactInfo' | 'screenshot';

const ErrorFeedback: React.FC<ErrorFeedbackProps> = ({
  error,
  onSubmit,
  fields = ['description', 'contactInfo'],
  showErrorDetails = true,
  anonymous = false,
}) => {
  const [feedback, setFeedback] = useState<ErrorFeedback>({ description: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onSubmit(feedback);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {showErrorDetails && (
        <div>
          <h3 className="font-bold">Error Details</h3>
          <pre className="text-sm bg-gray-100 p-2 rounded">
            {error instanceof Error ? error.message : 'An error occurred'}
          </pre>
        </div>
      )}
      {fields.includes('description') && (
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" name="description" value={feedback.description} onChange={handleChange} required />
        </div>
      )}
      {fields.includes('steps') && (
        <div>
          <Label htmlFor="steps">Steps to Reproduce</Label>
          <Textarea id="steps" name="steps" value={feedback.steps || ''} onChange={handleChange} />
        </div>
      )}
      {fields.includes('impact') && (
        <div>
          <Label htmlFor="impact">Impact</Label>
          <select id="impact" name="impact" value={feedback.impact || 'low'} onChange={handleChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      )}
      {fields.includes('frequency') && (
        <div>
          <Label htmlFor="frequency">Frequency</Label>
          <select id="frequency" name="frequency" value={feedback.frequency || 'once'} onChange={handleChange}>
            <option value="once">Once</option>
            <option value="intermittent">Intermittent</option>
            <option value="frequent">Frequent</option>
          </select>
        </div>
      )}
      {!anonymous && fields.includes('contactInfo') && (
        <div>
          <Label htmlFor="contactInfo">Contact Info</Label>
          <Input id="contactInfo" name="contactInfo" value={feedback.contactInfo || ''} onChange={handleChange} />
        </div>
      )}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
      </Button>
    </form>
  );
};

export { ErrorFeedback };
export type { ErrorFeedbackProps, FeedbackField };

