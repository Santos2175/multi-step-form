import React, { useState } from 'react';

export function useMultiStepForm(steps: React.ReactNode[]) {
  const [currentStep, setCurrentStep] = useState(0);

  // Funtion to move to next step
  function next() {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  }

  // Function to move to back step
  function back() {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  }

  // Function to move to desired step
  function goTo(step: number) {
    setCurrentStep(step);
  }

  return {
    currentStep,
    step: steps[currentStep],
    steps,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    next,
    back,
    goTo,
  };
}
