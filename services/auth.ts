import { http } from '@/configs/http'
import { SignUpPayload } from '@/types/sign-up'

const authService = {
  sendVerificationCode: (email: string) => {
    return http.get(`auth/send-code`, { searchParams: { email } })
  },

  verifyCode: (code: string) => {
    return http.get('auth/verify-code', { searchParams: { code } })
  },

  signUp: (body: SignUpPayload) => {
    return http.post('auth/sign-up', { json: body })
  }
}

export { authService }
