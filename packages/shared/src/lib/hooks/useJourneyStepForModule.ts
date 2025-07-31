import { useState, useEffect } from 'react';
import { newCompanyJourneyService } from '../services/new_journey/new_company_journey.service';
import { NewCompanyJourneyStep } from '../types/new_journey.types';
import { toast } from '../../components/ui/use-toast';

// Mapping from module keys to canonical step IDs
const moduleToCanonicalStepId: Record<string, string> = {
  BUDGET_PLANNER: 'a4bde762-4868-4838-9998-37534c732793',
  VENDOR_TRACKER: '344c7663-39c8-4358-a3cf-a81590355a3a',
  FINANCIAL_MODEL: '4ED1FCCF-F9A0-4CDA-BB45-6518E9FCEDE3',
  CASH_FLOW_TRACKER: 'CCA6CA52-FDDD-4976-886C-5425B91A49FF',
  FUNDRAISING_TIMELINE: 'fde9b94c-8848-4a23-ae8a-60985d24b288',
  INVOICE_TRACKER: '50DB2D45-183A-4694-A717-33FE6DC86A7C',
};

export const useJourneyStepForModule = (moduleKey: string, companyId: string | undefined) => {
  const [step, setStep] = useState<NewCompanyJourneyStep | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchOrCreateStep = async () => {
      if (!companyId) {
        setIsLoading(false);
        return;
      }

      const canonicalStepId = moduleToCanonicalStepId[moduleKey];

      if (!canonicalStepId) {
        setError(new Error(`Invalid module key: ${moduleKey}`));
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const resultStep = await newCompanyJourneyService.getOrCreateStepForModule(companyId, canonicalStepId);
        
        if (resultStep) {
          // Check if the step was newly created to show a toast
          const isNew = !resultStep.created_at || (new Date().getTime() - new Date(resultStep.created_at).getTime()) < 5000;
          if (isNew) {
            toast({
              title: 'New Journey Step Added',
              description: `The step "${resultStep.name}" has been added to your company's journey.`,
            });
          }
        }
        
        setStep(resultStep);
      } catch (e) {
        setError(e as Error);
        console.error(`Error in useJourneyStepForModule for ${moduleKey}:`, e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrCreateStep();
  }, [companyId, moduleKey]);

  return { step, isLoading, error };
};
