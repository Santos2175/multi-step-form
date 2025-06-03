import { cn } from '../../utils/cn';
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline';
};

// Button UI component
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'px-4 py-2 rounded font-semibold transition',
        variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'secondary' &&
          'bg-gray-200 text-gray-900 hover:bg-gray-300',
        variant === 'outline' &&
          'border border-gray-400 text-gray-900 hover:bg-gray-100',
        className
      )}
      {...props}>
      {children}
    </button>
  )
);

Button.displayName = 'Button';
