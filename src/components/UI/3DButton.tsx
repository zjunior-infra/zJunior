import {cva, type VariantProps } from 'class-variance-authority'
import {cn} from '@util/utils'
import React from 'react'

const buttonVariants = cva(
    "relative inline-block justify-center items-center text-accent",
    {
        variants: {
          size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
          },
        },
        defaultVariants: {
          size: "default",
        },
      }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
VariantProps<typeof buttonVariants>{
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, size, ...props }, ref) => {
      const Comp = "button"
      return (
          <Comp 
          className={cn(buttonVariants({className,size}))}
          ref={ref}
          {...props}
        />
        )
    }
  )
   
  export { Button, buttonVariants }