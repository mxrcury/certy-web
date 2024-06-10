'use client'
import { SignUpStepperProvider } from "@/providers/sign-up-stepper";

import { Logo } from "@/components/Logo/Logo";
import { SignUpStepper } from "@/components/SignUpStepper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

const SignUp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Logo className="pt-[21px] pl-[24px]" /> */}
      <SignUpStepperProvider>
        <SignUpStepper />
      </SignUpStepperProvider>
    </QueryClientProvider>
  )
};

export default SignUp;
