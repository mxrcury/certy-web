'use client'
import { useCallback, useEffect } from 'react'

import { P } from '@/components/ui/typography'

import { useCountdown } from '@/hooks/use-countdown'
import { sendVerificationCode } from '@/services/auth'
import { useSignUpStepper } from '@/providers/sign-up-stepper'

import { formatSecs } from '@/utils/format-secs'
import {
  SEND_CODE_AGAIN_COUNTDOWN
} from '@/constants/sign-up-stepper'
import { computeRequest } from '@/utils/compute-request'
import { SEND_CODE_AGAIN_MSG } from '@/constants/errors'

export const ResendCode = () => {
  const { values } = useSignUpStepper()
  const [sendCodeAgainCountdown, { startCountdown, resetCountdown }] =
    useCountdown({
      countStart: SEND_CODE_AGAIN_COUNTDOWN.START,
      countStop: SEND_CODE_AGAIN_COUNTDOWN.STOP
    })

  const onSendCodeAgain = () => computeRequest(async () => {
      await sendVerificationCode(values.email)
      resetCountdown()
    }, SEND_CODE_AGAIN_MSG)


  useEffect(() => {
    startCountdown()
  }, [startCountdown])

  const formatCountdown = useCallback(
    () => formatSecs(sendCodeAgainCountdown),
    [sendCodeAgainCountdown]
  )

  const btn = (
    <span onClick={onSendCodeAgain} className="text-sky-500 cursor-pointer">
      Click here
    </span>
  )

  const timer = (
    <span>
      Wait for <span className="font-semibold">{formatCountdown()}</span>
    </span>
  )

  return (
    <P className="text-center">
      Wants to receive code again? {sendCodeAgainCountdown === 0 ? btn : timer}
    </P>
  )
}
