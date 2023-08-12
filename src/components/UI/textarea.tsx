import { cn } from "@util/utils"
import * as React from "react"
 
 
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
 
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md z-[400] bg-background px-3 py-2 bg-input/30 text-sm ring-offset-background placeholder:text-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"
 
export { Textarea }