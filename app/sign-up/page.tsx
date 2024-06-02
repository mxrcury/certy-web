import { SignUpStepperProvider } from "@/providers/sign-up-stepper";

import { Logo } from "@/components/Logo/Logo";
import { SignUpStepper } from "@/components/SignUpStepper";

const SignUp = () => {
  return (
    <>
      {/* <Logo className="pt-[21px] pl-[24px]" /> */}
      <SignUpStepperProvider>
        <SignUpStepper />
      </SignUpStepperProvider>
    </>
  )
};

export default SignUp;
