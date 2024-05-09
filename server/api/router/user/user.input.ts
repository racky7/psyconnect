import { z } from "zod";
import { cuid } from "@/lib/validation";

export const getUserInput = z.object({
  id: cuid,
});

export const signUpUserInput = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(["USER", "DOCTOR"]),
});

export const logInUserInput = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const bookSlotInput = z.object({
  doctorUserId: cuid,
  startTime: z.string(),
  endTime: z.string(),
});
