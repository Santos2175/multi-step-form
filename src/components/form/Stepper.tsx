import { cn } from '../../utils/cn';

type StepperProps = {
  steps: string[];
  currentStep: number;
};

// Stepper component to show the progress
const Stepper = ({ steps, currentStep }: StepperProps) => {
  return (
    <div className='flex items-center mb-8'>
      {steps.map((label, idx) => (
        <div key={label} className='flex items-center'>
          <div
            className={cn(
              'w-8 h-8 flex items-center justify-center rounded-full font-bold',
              idx < currentStep
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-500'
            )}>
            {idx + 1}
          </div>
          {idx < steps.length - 1 && (
            <div className='w-8 h-1 bg-gray-300 mx-2 rounded' />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
