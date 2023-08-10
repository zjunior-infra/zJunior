import {cva, type VariantProps } from 'class-variance-authority'
import {cn} from '@util/utils'
import React from 'react'

const buttonVariants = cva(
    "relative inline-block justify-center z-[10] items-center rounded-md text-sm font-medium active:scale-95 transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 bg-white after:absolute after:w-[100%]  after:flex after:justify-center after:items-center after:h-[100%] after:z-[0] after:bg-white after:inset-0 after:bg-green-600 after:border-2  after:rounded-md after:-translate-y-[0.2rem] after:-translate-x-[0.2rem] after:duration-300 after:hover:translate-y-0 after:hover:translate-x-0",
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