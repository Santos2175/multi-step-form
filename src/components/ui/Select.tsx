import { cn } from '../../utils/cn';
import React from 'react';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

// Select ui component
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        'block w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500',
        className
      )}
      {...props}>
      {children}
    </select>
  )
);
Select.displayName = 'Select';
