'use client'
import { useSignUpStepper } from "@/providers/sign-up-stepper";
import { GeneralInfoStep, CodeVerificationStep } from "@/components/SignUpStepper";
import { SignUpSteps } from "@/types/sign-up";
import { NameInfoStep } from "./NameInfoStep/NameInfoStep";

export const SignUpStepper = () => {
  const { currentStep } = useSignUpStepper()
  
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh_-_55px)]">
      {currentStep === SignUpSteps.GeneralInfo && <GeneralInfoStep />}
      {currentStep === SignUpSteps.CodeVerification && <CodeVerificationStep />}
      {currentStep === SignUpSteps.NameInfo && <NameInfoStep />}
    </div>
  )
};
