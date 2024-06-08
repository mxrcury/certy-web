'use client'

import Img from 'next/image'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

import { LinkWithArrow } from '@/components/LinkWithArrow/LinkWithArrow'
import { H2, P } from '@/components/ui/typography'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'

import { useSignUpStepper } from '@/providers/sign-up-stepper'

import { XPositions } from '@/types'
import { SignUpSteps } from '@/types/sign-up'
import { signUpLastStepSchema } from '@/validations/sign-up'
import { defaultValuesNameInfoStep } from '@/constants/sign-up-stepper'
import { InputWithIcon } from '@/components/ui/input-with-icon'
import { computeRequest } from '@/utils/compute-request'
import { signUp } from '@/services/auth'

export const NameInfoStep = () => {
  const { setCurrentStep, values } = useSignUpStepper()

  const form = useForm<z.infer<typeof signUpLastStepSchema>>({
    resolver: zodResolver(signUpLastStepSchema),
    defaultValues: defaultValuesNameInfoStep
  })

  const onPrevStep = () => setCurrentStep(SignUpSteps.CodeVerification)

  const onSubmitStepper = (
    data: z.infer<typeof signUpLastStepSchema>
  ) => {
    const {  email, password } = values
    const payload = {
      ...data,
      email,
      password
    }

    computeRequest(async () => {
      await signUp(payload)
    })
  }

  return (
    <>
      <div className="w-full max-w-sm">
        <LinkWithArrow
          position={XPositions.Left}
          text="back"
          onClick={onPrevStep}
        />
        <div className="flex mb-[10px]">
          <H2 className="text-4xl border-0 mr-[10px]">become unique</H2>
          <Img
            src="/smile-emoji.svg"
            alt="smile"
            width={40}
            height={40}
            className="mb-[13px]"
          />
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmitStepper)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputWithIcon
                      startIcon={<P className="mb-[2px] ml-[8px]">@</P>}
                      placeholder="username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="mt-[5px]">
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input placeholder="First name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="mt-[5px]">
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last name (optional)" {...field} />
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
      </div>
    </>
  )
}
