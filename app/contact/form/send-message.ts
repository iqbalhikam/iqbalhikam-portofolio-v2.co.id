import { z } from 'zod';

export const sendMessageFormSchema = z.object({
  name: z.string({ message: 'wajib diisi' }).min(3, { message: 'minimum 3 karakter' }),
  email: z.string({ message: 'wajib diisi' }).email({ message: 'pasitikan format email benar' }),
  subject: z.string({ message: 'wajib diisi' }).min(5, { message: 'minimum 5 karakter' }),
  message: z.string({ message: 'wajib diisi' }).min(5, { message: 'minimum 5 karakter' }),
});

export type SendMessageFormSchema = z.infer<typeof sendMessageFormSchema>;
