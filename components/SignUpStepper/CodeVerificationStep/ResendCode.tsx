'use client'

import { useCallback, useEffect, useState } from 'react'

import { P } from '@/components/ui/typography'
import { formatSecs } from '@/utils/format-secs'
import { useCountdown } from '@/hooks/use-countdown'

export const ResendCode = () => {
  const [sendCodeAgainCountdown, { startCountdown, resetCountdown }] =
    useCountdown({
      countStart: 10,
      countStop: 0,
    })

  const onSendCodeAgain = () => {
    resetCountdown()
  }

  useEffect(() => {
    startCountdown()
  }, [])

  const formatCountdown = useCallback(
    () => formatSecs(sendCodeAgainCountdown),
    [sendCodeAgainCountdown]
  )

  const sendCodeAgainBtn = (
    <span onClick={onSendCodeAgain} className="text-sky-500 cursor-pointer">
      Click here
    </span>
  )

  const waitForSendCodeAgainTimer = (
    <span className="italic">Wait for {formatCountdown()}</span>
  )

  return <P className="text-center">
    Wants to receive code again?{' '}
    {sendCodeAgainCountdown === 0
      ? sendCodeAgainBtn
      : waitForSendCodeAgainTimer}
  </P>
}
