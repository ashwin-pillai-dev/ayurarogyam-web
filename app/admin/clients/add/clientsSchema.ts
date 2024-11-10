import { z } from "zod";
import { ClientTypeSchema } from "../../client-type/add/clientTypeSchema";


export const ClientSchema = z.object({
  name: z.string().min(1,{message:'Name is required'}),
  email: z.union( [
    z.literal( '' ),
    z.string().email(),
] ),
  address: z.string().min(6,{message:'address is required'}),
  contactNumber: z.string().min(10,{message:'contact number is required'}), // Add any further validations if needed
  clientType: ClientTypeSchema,
  clientTypeId:z.string().min(1,{message:'please select client'})
});
export type clientForm = z.infer<typeof ClientSchema>