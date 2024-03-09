import { z } from "zod";
import { cuid } from "@/lib/validation";

export const getUserInput = z.object({
  id: cuid,
});
