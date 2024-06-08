'use client'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { H2 } from '@/components/ui/typography'
import { ResendCode, CodeVerificationInputs } from '@/components/SignUpStepper/CodeVerificationStep'

import { useSignUpStepper } from '@/providers/sign-up-stepper'
import { verifyCode } from '@/services/auth'

import { SignUpSteps } from '@/types/sign-up'
import { computeRequest } from '@/utils/compute-request'
import { VERIFY_CODE_MSG } from '@/constants/errors'
import { LinkWithArrow } from '@/components/LinkWithArrow/LinkWithArrow'
import { XPositions } from '@/types'

export const CodeVerificationStep = (): JSX.Element => {
  const { setCurrentStep, values } = useSignUpStepper()

  const [isDisabledButton, setDisabledButton] = useState<boolean>(true)

  const onNextStep = () => computeRequest(async () => {
    await verifyCode(values.code)
    setCurrentStep(SignUpSteps.NameInfo)
  }, VERIFY_CODE_MSG)

  const onPrevStep = () => setCurrentStep(SignUpSteps.GeneralInfo)

  return (
    <>
      <div className="w-full max-w-sm">
        <LinkWithArrow text='back' position={XPositions.Left} onClick={onPrevStep} />
        <H2 className='mb-[61px] text-4xl border-0'>enter received code<br/> via email</H2>
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
