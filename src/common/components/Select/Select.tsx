import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import s from './Select.module.scss'

type Option = {
  id: number
  value: string
  label: string
}
type SelectProps = {
  label?: string
  fullWidth?: boolean
  options: Option[]
} & ComponentPropsWithoutRef<'select'>

export const Select = forwardRef<ElementRef<'select'>, SelectProps>(
  ({ label, fullWidth, options, ...rest }, ref) => {
    return (
      <div className={s.wrapper}>
        {label && <label className={s.label}>{label}</label>}
        <select ref={ref} className={`${s.select} ${fullWidth ? s.fullWidth : ''}`} {...rest}>
          {options.map(option => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    )
  }
)
