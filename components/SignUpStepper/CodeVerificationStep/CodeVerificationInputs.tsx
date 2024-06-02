'use client'
import { useEffect, useState } from 'react'

import { OneCharInput } from '@/components/SignUpStepper/CodeVerificationStep'

import { useSignUpStepper } from '@/providers/sign-up-stepper'

import {
  genInitialCodeValues,
  initialCodeValues
} from '@/constants/sign-up-stepper'

interface ICodeVerificationInputsProps {
  setDisabledButton: (disabled: boolean) => void
}

export const CodeVerificationInputs = ({
  setDisabledButton
}: ICodeVerificationInputsProps): JSX.Element => {
  const { currentStep } = useSignUpStepper()
  const [codeValues, setCodeValues] = useState<string[]>(initialCodeValues)

  const onChangeCodeValue = (i: number, val: string) => {
    setCodeValues((prevValues) => {
      prevValues[i] = val

      setDisabledButton(codeValues.some((v) => v.trim() == ''))
      return prevValues
    })
  }

  useEffect(() => {
    setCodeValues(genInitialCodeValues())
  }, [currentStep])

  return (
    <div className="flex gap-3 justify-between">
      {codeValues.map((_, index) => (
        <OneCharInput
          key={index}
          onHandleValue={(value) => onChangeCodeValue(index, value)}
        />
      ))}
    </div>
  )
}
