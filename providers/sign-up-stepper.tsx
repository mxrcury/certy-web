'use client'

import { SignUpSteps } from '@/types/sign-up'
import { createContext, useContext, useState } from 'react'
import { ZodError, z } from 'zod'

interface ProviderProps {
  children: React.ReactNode
}

interface ContextValue {
  currentStep: SignUpSteps
  setCurrentStep: (step: SignUpSteps) => void
  values: InitialFormValues
  errors: InitialFormValues
  setValue: (fieldKey: keyof InitialFormValues, value: string) => void
  validate: <S, V>(schema: S, value: V) => boolean
}

interface InitialFormValues {
  email: string
  password: string
  code: string
  username: string
  firstName: string
  lastName: string
}

const initialValues = {
  currentStep: SignUpSteps.GeneralInfo,
  values: {
    email: '',
    password: '',
    code: '',
    username: '',
    firstName: '',
    lastName: ''
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
