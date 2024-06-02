'use client'

import { ChangeEvent, useState } from "react"

import { Input } from "@/components/ui/input"

interface IOneCharInputProps {
    onHandleValue: (val: string) => void
}

export const OneCharInput = ({ onHandleValue  }: IOneCharInputProps): JSX.Element => {
    const [val, setVal] = useState<string>()

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const isAlreadyEnteredVal = val?.length === 1 && e.target.value.length > 1

        if(isAlreadyEnteredVal) return
    
        setVal(e.target.value)
        onHandleValue(e.target.value)
    }

    return <Input onChange={onChange} value={val} className="w-[45px] h-[43px] text-center"  max={1} min={1}/>
}