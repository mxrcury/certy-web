import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputWithIconProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
  ({ className, type, startIcon, ...props }, ref) => {
    return (
      <div className="w-full relative">
        <>
          {startIcon && (
            <div className="absolute left-1.5 top-1/2 transform -translate-y-1/2">
              {startIcon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              'flex h-10 w-full rounded-md border border-input bg-background py-2 px-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
              startIcon ? 'pl-8' : '',
              className
            )}
            ref={ref}
            {...props}
          />
        </>
      </div>
    )
  }
)
InputWithIcon.displayName = 'InputWithIcon'

export { InputWithIcon }
