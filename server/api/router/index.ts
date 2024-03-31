import { router } from "../trpc";
import { doctorRouter } from "./doctor/doctor.route";
import { userRouter } from "./user/user.router";

export const appRouter = router({
  user: userRouter,
  doctor: doctorRouter,
});

export type AppRouter = typeof appRouter;
