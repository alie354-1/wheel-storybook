import { ProgressIndicator } from '@wheel/ui';
import React, { useEffect, useState } from 'react';

interface RecoveryStep {
  id: string;
  label: string;
  description?: string;
  action: () => Promise<void>;
  canSkip?: boolean;
  timeout?: number;
}

interface RecoveryProgressProps {
  steps: RecoveryStep[];
  currentStep: number;
  context?: 'consultant' | 'client' | 'admin' | 'neutral';
  showStepDetails?: boolean;
  onStepComplete?: (step: RecoveryStep) => void;
  onRecoveryComplete?: () => void;
  onRecoveryFail?: (error: Error) => void;
}

const RecoveryProgress: React.FC<RecoveryProgressProps> = ({
  steps,
  onRecoveryComplete,
  onRecoveryFail,
  onStepComplete,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const runSteps = async () => {
      for (let i = 0; i < steps.length; i++) {
        setCurrentStep(i);
        try {
          await steps[i].action();
          if (onStepComplete) {
            onStepComplete(steps[i]);
          }
        } catch (e) {
          setError(e as Error);
          if (onRecoveryFail) {
            onRecoveryFail(e as Error);
          }
          return;
        }
      }
      if (onRecoveryComplete) {
        onRecoveryComplete();
      }
    };

    runSteps();
  }, [steps, onRecoveryComplete, onRecoveryFail, onStepComplete]);

  const progress = (currentStep / steps.length) * 100;

  if (error) {
    return <div>Recovery failed: {error.message}</div>;
  }

  return (
    <div>
      <ProgressIndicator value={progress} />
      <p>
        Step {currentStep + 1} of {steps.length}: {steps[currentStep].label}
      </p>
    </div>
  );
};

export { RecoveryProgress };
export type { RecoveryProgressProps, RecoveryStep };

