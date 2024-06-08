export enum SignUpSteps {
    GeneralInfo,
    CodeVerification,
    NameInfo
}

export type SignUpPayload = {
    email: string
    password: string
    username: string
    firstName: string
    lastName?: string
}