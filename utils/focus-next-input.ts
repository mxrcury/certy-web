export const focusNextInput = (i: number) => {
  const nextInput = document.querySelector<HTMLInputElement>(
    `input[name=input-${i + 1}]`
  )

  if (nextInput !== null) {
    nextInput.focus()
    let tmpVal = nextInput.value 
    nextInput.value = ''
    nextInput.value = tmpVal
  }
}
