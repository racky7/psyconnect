import { z } from "zod";
import { Session } from "next-auth";
import { getUserInput } from "./user.input";
import { db } from "@/lib/db";

export function getUser(input: z.infer<typeof getUserInput>) {
  return db.user.findUnique({
    where: {
      id: input.id,
    },
  });
}

export function getCurrentUser(session: Session) {
  return db.user.findUnique({
    where: {
      id: session.user.id,
    },
  });
}
