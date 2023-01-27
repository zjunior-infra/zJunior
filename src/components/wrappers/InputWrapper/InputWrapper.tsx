import type { ReactNode } from 'react'

interface IInput {
  title : string
  name : string
  children: ReactNode
}
const InputWrapper = ({name , title , children}  : IInput) => {
  return (
    <div className="m-8 ">
        <label htmlFor={name} className="block mb-2 text-sm font-medium  text-zinc-800">{title}</label>
        {children}
      </div>
  )
}

export default InputWrapper