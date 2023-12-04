import { z } from 'zod';

export const PartnerFormSchema = z.object({
  name: z.string().min(1, 'Name is required.'),
  roleId: z.string().min(1, 'Role is required.'),
  email: z.string().email('Invalid email format.').min(1, 'Email is required.'),
  contactNumber: z.string().min(1, 'Contact number is required.'),
  password: z.string().min(1, 'Password is required.'),
});
