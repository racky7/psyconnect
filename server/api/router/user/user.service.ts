import { z } from "zod";
import { AuthError, Session } from "next-auth";
import {
  bookSlotInput,
  getUserInput,
  logInUserInput,
  signUpUserInput,
} from "./user.input";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { TRPCError } from "@trpc/server";
import { signIn } from "@/auth";
import { v4 as uuidv4 } from "uuid";

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

export async function signUpUser({
  name,
  email,
  password,
  role,
}: z.infer<typeof signUpUserInput>) {
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

  return db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role,
      username: `${name.split(" ")[0]}_${Date.now()}`,
    },
  });
}

export async function logInUser({
  email,
  password,
}: z.infer<typeof logInUserInput>) {
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return db.user.findUnique({
      where: {
        email: email,
      },
    });
  } catch (error) {
    console.log("error ->", error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Invalid credentials",
          });
        default:
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Something went wrong!",
          });
      }
    }

    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Something went wrong!",
    });
  }
}

export async function bookSlot(
  { doctorUserId, startTime, endTime }: z.infer<typeof bookSlotInput>,
  session: Session
) {
  if (!session.user.id) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "User not found",
    });
  }
  // TODO: Check if booking is conflicting or not
  try {
    await db.booking.create({
      data: {
        uid: uuidv4(),
        userId: doctorUserId,
        requestedUserId: session.user.id,
        title: `Booking with ${session.user.name}`,
        startTime,
        endTime,
      },
    });
  } catch (error) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "Error booking slot",
    });
  }
}

export function getUserBookings(session: Session) {
  return db.booking.findMany({
    where: {
      requestedUserId: session.user.id!,
    },
  });
}
