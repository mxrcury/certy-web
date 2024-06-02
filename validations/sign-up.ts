import { z } from "zod";

export const signUpFirstStepSchema = z.object({
  email: z.string().email({
    message: 'You entered wrong email format'
  }),
  password: z.string().min(2, {
    message: "Password can't be less than 2 length"
  })
})