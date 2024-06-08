export const parseError = (e: unknown) => {
  return e != null && typeof e == 'object'
    ? 'message' in e && String(e.message)
    : typeof e == 'string'
    ? e
    : null
}
