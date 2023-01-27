import { useReducer } from 'react'

interface IInitialInputState {
  value: string,
  isTouched: boolean,
  isChanged: boolean
}

const initialInputState: IInitialInputState = {
  value: '',
  isTouched: false,
  isChanged: false
}
const inputStateReducer = (state: IInitialInputState, action: any) => {
  if (action.type === 'SET_VALUE') {
    return {
      ...state,
      value: action.value,
    }
  }
  if (action.type === 'ON_CHANGE')
    return {
      value: action.value,
      isChanged: true,
      isTouched: false
    }
  if (action.type === 'BLUR')
    return {
      ...state,
      value: state.value,
      isTouched: true
    }
  if (action.type === 'RESET')
    return initialInputState
  return initialInputState
}
const useInput = (validateValueFun: (any: any) => {}, initialValue: any) => {
  if (initialValue)
    initialInputState.value = ''
  initialInputState.value = initialValue || ''
  const [inputState, dispatchInput] = useReducer(inputStateReducer, initialInputState)
  const isValid = validateValueFun(inputState.value)
  const hasError = inputState.isTouched && !isValid
  // dispatchInput({
  //   type : 'SET_VALUE',
  //     value : initialValue
  // })

  const setValueHandler = (value: any) => {
    dispatchInput({
      type: 'SET_VALUE',
      value
    })
  }
  const onChangeHandler = (e: any) => {
    dispatchInput({
      type: 'ON_CHANGE',
      value: e.target.value,
    })
  }
  const onBlurHandler = () => {
    dispatchInput({ type: 'BLUR' })
  }
  const resetInputHandler = () => {
    dispatchInput({ type: 'RESET' })
  }
  return {
    value: inputState.value,
    hasError,
    isValid: isValid,
    isChanged: inputState.isChanged,
    setValueHandler,
    onChangeHandler,
    onBlurHandler,
    resetInputHandler,
  }
}

export default useInput;