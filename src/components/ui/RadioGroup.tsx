import React from 'react';

type RadioGroupProps = {
  name: string;
  options: { label: string; value: string }[];
  value?: string;
  onChange?: (value: string) => void;
};

// Radio ui component
export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
}) => (
  <div className='flex gap-4'>
    {options.map((opt) => (
      <label key={opt.value} className='flex items-center gap-1'>
        <input
          type='radio'
          name={name}
          value={opt.value}
          checked={value === opt.value}
          onChange={() => onChange?.(opt.value)}
          className='h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500'
        />
        {opt.label}
      </label>
    ))}
  </div>
);
