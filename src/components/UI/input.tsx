import {cn} from '@util/utils'
import {cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const InputVariants = cva(
  "relative w-full flex justify-center py-2 text-sm px-2 rounded-lg placeholder:text-foreground/20 focus-visible:outline-none items-center text-bacground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
  {
      variants: {
        variant: {
          default:
            "border-transparent bg-muted ",
          secondary:
            "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
)
export interface InputProps 
    extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof InputVariants>{
    }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type,variant, ...props }, ref) => {
      return (
        <input
          type={type}
          className={cn(InputVariants({className,variant}))}
          ref={ref}
          {...props}
        />
      )
    }
  )
Input.displayName = "Input"
   
export { Input,InputVariants }