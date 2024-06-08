import { z } from 'zod'

export const signUpFirstStepSchema = z.object({
  email: z.string().email({
    message: 'You entered wrong email format'
  }),
  password: z.string().min(2, {
    message: "Password can't be less than 2 length"
  })
})

export const signUpLastStepSchema = z.object({
  username: z
    .string()
    .max(14, {
      message: "Username can't be greater than 14 length"
    })
    .min(4, {
      message: "Username can't be less than 4 length"
    }),
  firstName: z
    .string()
    .max(20, {
      message: "First name can't be greater than 20 length"
    })
    .min(2, {
      message: "First name can't be less than 2 length"
    }),
  lastName: z
    .string()
    .max(20, {
      message: "Last name can't be greater than 20 length"
    })
    .optional()
})
