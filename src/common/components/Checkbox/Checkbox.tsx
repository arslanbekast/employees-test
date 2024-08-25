import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import s from './Checkbox.module.scss'

type CheckboxProps = {
  label?: string
} & ComponentPropsWithoutRef<'input'>

export const Checkbox = forwardRef<ElementRef<'input'>, CheckboxProps>(
  ({ label, ...rest }, ref) => {
    return (
      <div className={s.wrapper}>
        <input type="checkbox" ref={ref} id={'checkbox'} {...rest} />
        {label && <label htmlFor={'checkbox'}>{label}</label>}
      </div>
    )
  }
)
