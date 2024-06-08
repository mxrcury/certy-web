export const focusPrevInput = (i: number) => {
  const nextInput = document.querySelector<HTMLInputElement>(
    `input[name=input-${i - 1}]`
  )

  if (nextInput !== null) {
    nextInput.focus()
    nextInput.setSelectionRange(nextInput.value.length, nextInput.value.length)
  }
}
