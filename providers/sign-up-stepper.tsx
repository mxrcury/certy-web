'use client'
import { createContext, useContext, useState } from 'react'

import { SignUpSteps } from '@/types/sign-up'

interface ProviderProps {
  children: React.ReactNode
}

interface ContextValue {
  currentStep: SignUpSteps
  setCurrentStep: (step: SignUpSteps) => void
  values: InitialFormValues
  setValue: (fieldKey: keyof InitialFormValues, value: string) => void
}

interface InitialFormValues {
  email: string
  password: string
  code: string
}

const initialValues = {
  currentStep: SignUpSteps.GeneralInfo,
  values: {
    email: '',
    password: '',
    code: '',
  }
}

const SignUpStepperContext = createContext({})

export const useSignUpStepper = () =>
  useContext(SignUpStepperContext) as ContextValue

export const SignUpStepperProvider = ({ children }: ProviderProps) => {
  const [currentStep, setCurrentStep] = useState<number>(
    initialValues.currentStep
  )
  const [values, setValues] = useState<InitialFormValues>(initialValues.values)

  const setValue = (fieldKey: keyof InitialFormValues, value: string) => {
    if(!value) return

    setValues((prevValues) => ({ ...prevValues, [fieldKey]: value }))
  }

  const value = {
    currentStep,
    setCurrentStep,
    values,
    setValue,
  }

  return (
    <SignUpStepperContext.Provider value={value}>
      {children}
    </SignUpStepperContext.Provider>
  )
}
