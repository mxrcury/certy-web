import ky from 'ky'

export const http = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_SERVER_URL,
})

export const httpAuthorized = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_SERVER_URL,
  hooks: {
    beforeRequest: [
      (request) =>
        request.headers.set(
          'Authorization',
          `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
        )
    ]
  }
})