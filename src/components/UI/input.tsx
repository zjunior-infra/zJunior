
import {cn} from '@util/utils'
import React from 'react'

export interface InputProps 
    extends React.InputHTMLAttributes<HTMLInputElement>{}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
      return (
        <input
          type={type}
          className={cn(
            "flex h-10 w-full border-b-2 border-input bg-background px-1 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-[#00D563] duration-300 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      )
    }
  )
  Input.displayName = "Input"
   
  export { Input }