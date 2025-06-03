import { useEffect } from 'react';
import { useFormContext, type FieldValues } from 'react-hook-form';

export function useFormPersist<T extends FieldValues>(key: string) {
  const { watch, reset } = useFormContext<T>();

  useEffect(() => {
    const subscription = watch((value) =>
      localStorage.setItem(key, JSON.stringify(value))
    );

    const saved = localStorage.getItem(key);

    if (saved) {
      reset(JSON.parse(saved));
    }

    return () => subscription.unsubscribe();
  }, [watch, reset, key]);
}
