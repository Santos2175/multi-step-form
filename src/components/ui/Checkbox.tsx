import React from 'react';

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

// Checkbox ui component
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ ...props }, ref) => (
    <input
      ref={ref}
      type='checkbox'
      className='h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
      {...props}
    />
  )
);
Checkbox.displayName = 'Checkbox';
