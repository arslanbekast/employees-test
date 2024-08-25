import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import s from './TextField.module.scss'

type TextFieldProps = {
  error?: string
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<ElementRef<'input'>, TextFieldProps>(
  ({ error, label, placeholder, type = 'text', ...rest }, ref) => {
    return (
      <div className={s.wrapper}>
        {label && <label className={s.label}>{label}</label>}
        <input
          placeholder={placeholder}
          type={type}
          {...rest}
          ref={ref}
          className={`${s.textField} ${error && s.error}`}
        />
        {error && <span className={s.errorMessage}>{error}</span>}
      </div>
    )
  }
)
