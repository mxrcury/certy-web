import ky from 'ky'

console.log()

export const http = ky.create({
  prefixUrl: process.env.SERVER_URL,
})

export const httpAuthorized = ky.create({
  prefixUrl: process.env.SERVER_URL,
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