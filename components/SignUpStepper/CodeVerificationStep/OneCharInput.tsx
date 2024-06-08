'use client'
import { ChangeEvent, useEffect, useRef, useState } from 'react'

import { Input } from '@/components/ui/input'
import { focusPrevInput } from '@/utils/focus-prev-input'
import { focusNextInput } from '@/utils/focus-next-input'

interface IOneCharInputProps {
  onHandleValue: (val: string) => void
  onHandleRef: (ref: React.MutableRefObject<HTMLInputElement | null>) => void
  defaultValue: string
  disabled: boolean
  index: number
}

export const OneCharInput = ({
  onHandleValue,
  onHandleRef,
  disabled,
  defaultValue,
  index
}: IOneCharInputProps): JSX.Element => {
  const [val, setVal] = useState<string>(defaultValue)

  const ref = useRef<HTMLInputElement | null>(null)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value[0] || '')
    onHandleValue(e.target.value[0] || '')
  }

  useEffect(() => {
    setVal(defaultValue)
  }, [defaultValue])

  useEffect(() => {
    if(ref.current) {
      onHandleRef(ref)
    }
  }, [onHandleRef])

  return (
    <Input
      name={'input-' + String(index)}
      onChange={onChange}
      value={val}
      ref={ref}
      className="w-[45px] h-[43px] text-center"
      disabled={disabled}
      onKeyDown={(e) => {
        if (e.key == 'ArrowLeft') {
          focusPrevInput(index)
        }
        
        if(e.key == 'ArrowRight' && e.currentTarget.value == '') {
          focusNextInput(index)
        }
        
        const isNotEmptyValueWithCursorBeforeText =
          e.currentTarget.selectionEnd !== 0

        if (e.key == 'ArrowRight' && isNotEmptyValueWithCursorBeforeText) {
          focusNextInput(index)
        }
      }}
    />
  )
}
