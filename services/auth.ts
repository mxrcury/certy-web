import { http } from '@/configs/http'

const service = {
  sendVerificationCode: (email: string) => {
    return http.get('auth/send-code', { searchParams: { email } })
  },

  verifyCode: (code: string) => {
    return http.get('auth/verify-code', { searchParams: { code }})
  }
}

export const { sendVerificationCode, verifyCode } = service
