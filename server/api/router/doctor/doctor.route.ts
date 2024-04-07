import { protectedProcedure, publicProcedure, router } from "../../trpc";
import { signUpDoctorInput } from "./doctor.input";
import { getAvailability, signUpDoctor } from "./doctor.service";

export const doctorRouter = router({
  signUpDoctor: publicProcedure
    .input(signUpDoctorInput)
    .mutation(({ input }) => signUpDoctor(input)),
  getAvailability: protectedProcedure.query(
    ({
      ctx: {
        session: {
          user: { id },
        },
      },
    }) => getAvailability(id!)
  ),
});
