'use client';

import { Button } from '@/components/atoms/Button/Button';
import { StepperStyles } from './Stepper.styles';
import { Typography } from '@/components/atoms/Typography/Typography';
import { useTheme } from '@emotion/react';
import { ReactNode, useCallback, useMemo, useState } from 'react';

export interface StepperProps {
  steps?: Step[];
}

interface Step {
  title?: string;
  content?: ReactNode;
}

export const Stepper = ({ steps }: StepperProps) => {
  const theme = useTheme();
  const [currentStep, setCurrentStep] = useState(0);
  const isValidStep = useMemo(
    () => Array.isArray(steps) && steps.length > 0,
    [steps]
  );
  const getStepContent = useCallback(
    () => steps![currentStep].content,
    [currentStep, steps]
  );
  const maxSteps = useMemo(
    () => (isValidStep ? steps!.length - 1 : 0),
    [steps]
  );

  const handlePreviousStep = () => {
    if (currentStep === 0) {
      return;
    }

    setCurrentStep((curr) => curr - 1);
  };

  const handleNextStep = () => {
    if (currentStep === maxSteps) {
      return;
    }

    setCurrentStep((curr) => curr + 1);
  };

  return (
    <StepperStyles>
      <div className="stepper__circles">
        {isValidStep && steps!.map(({ title }) => <p>Step</p>)}
      </div>
      {isValidStep && (
        <div className="stepper__title">
          <Typography variant="heading3" color={theme.colors.primary.dark}>
            {steps![currentStep].title}
          </Typography>
        </div>
      )}
      {isValidStep && (
        <div className="stepper__content">{getStepContent()}</div>
      )}
      <div className="stepper__actions">
        <Button
          variant="outlined"
          disabled={currentStep === 0}
          onClick={handlePreviousStep}
        >
          Atras
        </Button>
        <Button
          variant="contained"
          disabled={currentStep === maxSteps}
          onClick={handleNextStep}
        >
          Siguiente
        </Button>
      </div>
    </StepperStyles>
  );
};
