'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { ResendCode, CodeVerificationInputs } from '@/components/SignUpStepper/CodeVerificationStep'

import { useSignUpStepper } from '@/providers/sign-up-stepper'

import { SignUpSteps } from '@/types/sign-up'

export const CodeVerificationStep = (): JSX.Element => {
  const { setCurrentStep, currentStep } = useSignUpStepper()

  const [isDisabledButton, setDisabledButton] = useState<boolean>(true)

  const onNextStep = () => {
    setCurrentStep(SignUpSteps.NameInfo)
  }

  return (
    <>
      <div className="w-full max-w-sm">
        <CodeVerificationInputs setDisabledButton={setDisabledButton} />
        <div className="flex justify-center">
          <Button
            onClick={onNextStep}
            disabled={isDisabledButton}
            type="submit"
            className="px-[60px] mt-[35px]"
          >
            Verify
          </Button>
        </div>
      </div>
      <ResendCode />
    </>
  )
}
