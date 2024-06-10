'use client'
import { useEffect, useState } from 'react'

import { OneCharInput } from '@/components/SignUpStepper/CodeVerificationStep'

import { useSignUpStepper } from '@/providers/sign-up-stepper'

import {
  genInitialCodeValues,
  initialCodeValues
} from '@/constants/sign-up-stepper'
import { focusPrevInput } from '@/utils/focus-prev-input'
import { focusNextInput } from '@/utils/focus-next-input'

interface ICodeVerificationInputsProps {
  setDisabledButton: (disabled: boolean) => void
}

export const CodeVerificationInputs = ({
  setDisabledButton
}: ICodeVerificationInputsProps): JSX.Element => {
  const { currentStep, setValue } = useSignUpStepper()
  const [codeValues, setCodeValues] = useState<string[]>(initialCodeValues)
  const [inputRefs, setInputRefs] = useState<React.MutableRefObject<HTMLInputElement | null>[]>([])
  
  const onChangeCodeValue = (
    i: number,
    val: string,
  ) => {
    setCodeValues((prevValues) => {

      setDisabledButton(prevValues.some((v) => v.trim() == ''))

      setValue('code', prevValues.join(''))

      const isValidInputToFocusNext = prevValues[i] === '' && val !== '' && i < 6
      if (isValidInputToFocusNext) {
        focusNextInput(i)
      }

      const isValidInputToFocusPrev = prevValues[i] !== '' && val === '' && i > 0
      if(isValidInputToFocusPrev) {
        focusPrevInput(i)
      }

      prevValues[i] = val
      
      return prevValues
    })
  }

  const onHandleRef = (
    ref: React.MutableRefObject<HTMLInputElement | null>
  ) => {
    setInputRefs((prevValues) => {
      if (prevValues.length < 6) {
        prevValues.push(ref)
      }
      return prevValues
    })
  }

  useEffect(() => {
    document.addEventListener('paste', (e) => {
      const inputsQty = 6
      const clipboardText = e.clipboardData?.getData('text').slice(0, inputsQty)

      setCodeValues((prevValues) => {
        const newValues = clipboardText?.split('') || []

        newValues
          .filter((v) => v.trim() !== '')
          .forEach((v, i) => (prevValues[i] = v))

        setValue('code', prevValues.join(''))

        return prevValues
      })


      if (clipboardText?.length == inputsQty) {
        setDisabledButton(false)
      }
    })

    return () => {
      document.removeEventListener("paste", (_) => {})
    }
  }, [])

  console.log(codeValues);

  useEffect(() => {
    setCodeValues(genInitialCodeValues())
  }, [currentStep])

  return (
    <div className="flex gap-3 justify-between">
      {codeValues.map((v, index) => (
        <OneCharInput
          key={index}
          index={index}
          defaultValue={v}
          disabled={false}
          onHandleValue={(val) => onChangeCodeValue(index, val)}
          onHandleRef={onHandleRef}
        />
      ))}
    </div>
  )
}
