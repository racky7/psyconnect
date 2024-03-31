import { z } from "zod";

export const signUpDoctorInput = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(["USER", "DOCTOR"]),
});
