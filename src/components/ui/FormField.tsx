import React from 'react';

type FormFieldProps = {
  label: string;
  children: React.ReactNode;
  error?: string;
};

// FormField ui component
export const FormField: React.FC<FormFieldProps> = ({
  label,
  children,
  error,
}) => (
  <div className='mb-1'>
    <label className='block mb-1 font-medium'>{label}</label>
    {children}
    {error && <p className='text-sm text-red-500 mt-1'>{error}</p>}
  </div>
);
