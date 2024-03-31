import { z } from "zod";
import { signUpDoctorInput } from "./doctor.input";
import { db } from "@/lib/db";
import { TRPCError } from "@trpc/server";
import bcrypt from "bcryptjs";
import { minToDate } from "@/lib/availability";

export async function signUpDoctor({
  name,
  email,
  password,
  role,
}: z.infer<typeof signUpDoctorInput>) {
  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "User already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    return db.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role,
          username: `${name.split(" ")[0].toLowerCase()}_${Date.now()}`,
        },
      });
      const doctor = await tx.doctor.create({
        data: {
          userId: user.id,
          fullName: name,
          availability: {
            create: [
              {
                days: [1, 2, 3, 4, 5],
                startTime: minToDate(540),
                endTime: minToDate(1020),
                disabled: true,
              },
              {
                days: [0, 6],
                startTime: minToDate(600),
                endTime: minToDate(720),
                disabled: true,
              },
            ],
          },
        },
      });
      return doctor;
    });
  } catch (err) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
    });
  }
}
