import { z } from "zod";

export const signUpDoctorInput = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(["USER", "DOCTOR"]),
});

export const updateAvailabilitiesInput = z.array(
  z.object({
    id: z.number(),
    startTime: z.date().optional(),
    endTime: z.date().optional(),
    disabled: z.boolean().optional(),
  })
);
