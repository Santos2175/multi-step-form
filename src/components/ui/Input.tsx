import { cn } from '../../utils/cn';
import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

// Input ui component
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'block w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500',
        className
      )}
      {...props}
    />
  )
);
Input.displayName = 'Input';
