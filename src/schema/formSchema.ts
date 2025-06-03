import { z } from 'zod';

export const personalInfoSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
});

export const addressInfoSchema = z.object({
  address: z.string().min(5),
  city: z.string().min(2),
  state: z.string().min(2),
  zip: z.string().min(5),
});

// step 1: Account schema
const accountInfoBaseSchema = z.object({
  username: z.string().min(4),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

// Step 2: Apply refine to account schema
export const accountInfoSchema = accountInfoBaseSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  }
);

export const preferencesSchema = z.object({
  newsletter: z.boolean(),
  plan: z.enum(['basic', 'pro', 'enterprise']),
});

export const fullFormSchema = personalInfoSchema
  .merge(addressInfoSchema)
  .merge(accountInfoBaseSchema)
  .merge(preferencesSchema);

// export inferred types
export type FormData = z.infer<typeof fullFormSchema>;
export type Personalnfo = z.infer<typeof personalInfoSchema>;
export type AddressInfo = z.infer<typeof addressInfoSchema>;
export type accountInfo = z.infer<typeof accountInfoBaseSchema>;
export type Preference = z.infer<typeof preferencesSchema>;
