'use client'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { P } from '@/components/ui/typography'
import { toast } from '@/components/ui/use-toast'

import { routes } from '@/constants/routes'
import { useSignUpStepper } from '@/providers/sign-up-stepper'

import { signUpFirstStepSchema } from '@/validations/sign-up'
import { defaultValuesGeneralInfoStep } from '@/constants/sign-up-stepper'
import { sendVerificationCode } from '@/services/auth'
import { parseError } from '@/utils/parse-error'
import { SignUpSteps } from '@/types/sign-up'

export const GeneralInfoStep = (): JSX.Element => {
  const { setCurrentStep, setValue } = useSignUpStepper()

  const form = useForm<z.infer<typeof signUpFirstStepSchema>>({
    resolver: zodResolver(signUpFirstStepSchema),
    defaultValues: defaultValuesGeneralInfoStep
  })

  const onNextStep = async (data: z.infer<typeof signUpFirstStepSchema>) => {
    try {
      await sendVerificationCode(data.email)
      
      setCurrentStep(SignUpSteps.CodeVerification)
      setValue('email', data.email)
      setValue('password', data.password)
    } catch (error) {
      const errorMsg = parseError(error)

      toast({
        title: errorMsg || 'Verification code was not send',
        variant: 'destructive'
      })
    }
  }

  return (
    <>
      <div className="w-full max-w-sm">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onNextStep)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mt-[5px]">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button type="submit" className="px-[60px] mt-[35px]">
                Sign Up
              </Button>
            </div>
          </form>
        </Form>
        <P className="text-center">
          Already have an account?{' '}
          <Link href={routes.signIn} className="text-sky-500">
            Click here
          </Link>
        </P>
      </div>
    </>
  )
}
