import { protectedProcedure, publicProcedure, router } from "../../trpc";
import {
  bookSlotInput,
  getUserInput,
  logInUserInput,
  signUpUserInput,
} from "./user.input";
import {
  bookSlot,
  getCurrentUser,
  getUser,
  logInUser,
  signUpUser,
} from "./user.service";

export const userRouter = router({
  getUser: protectedProcedure
    .input(getUserInput)
    .query(({ input }) => getUser(input)),
  getCurrentUser: protectedProcedure.query(({ ctx: { session } }) =>
    getCurrentUser(session)
  ),
  logInUser: publicProcedure
    .input(logInUserInput)
    .mutation(({ input }) => logInUser(input)),
  signUpUser: publicProcedure
    .input(signUpUserInput)
    .mutation(({ input }) => signUpUser(input)),
  bookSlot: protectedProcedure
    .input(bookSlotInput)
    .mutation(({ input, ctx: { session } }) => bookSlot(input, session)),
});
