import type React from 'react';

type StepProps = {
  children: React.ReactNode;
};

const Step = ({ children }: StepProps) => {
  return (
    <div className='bg-white p-8 rounded shadow-md w-full max-w-lg mx-auto'>
      {children}
    </div>
  );
};

export default Step;
