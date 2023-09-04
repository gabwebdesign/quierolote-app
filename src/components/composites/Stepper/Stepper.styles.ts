import { Styles } from "@/types/common";
import { Theme } from "@emotion/react";
import styled from "@emotion/styled";

interface StepperStylesProps {
  theme?: Theme;
}

const StepperBase = (): Styles => ({
  width: '100%',
  maxWidth: 800,
  borderRadius: 8,
  boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
  minHeight: 500,
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  '& .stepper__actions': {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: 'auto'
  },
  '& .stepper__content': {
    height: '100%',
    margin: '10px 0'
  }
});

const getStepperStyles = () => ({
  ...StepperBase()
});

export const StepperStyles = styled.div<StepperStylesProps>(getStepperStyles);