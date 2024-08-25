import { Employee } from '@/features/employees/model/employeesSlice'
import { TextField } from '@/common/components/TextField/TextField'
import s from './EmployeeForm.module.scss'
import { Select } from '@/common/components/Select/Select'
import { Checkbox } from '@/common/components/Checkbox/Checkbox'
import { Button } from '@/common/components/Button/Button'
import { useEmployeeForm } from '@/features/employees/hooks/useEmployeeForm'

const selectOptions = [
  { id: 1, value: 'cook', label: 'Повар' },
  { id: 2, value: 'waiter', label: 'Официант' },
  { id: 3, value: 'driver', label: 'Водитель' },
]

type EmployeeFormProps = {
  employee?: Employee
}

export const EmployeeForm = ({ employee }: EmployeeFormProps) => {
  const { register, handleSubmit, handleCancel, onSubmit, errors } = useEmployeeForm(employee)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <TextField
        {...register('name')}
        label={'Имя:'}
        placeholder={'Имя'}
        error={errors.name?.message}
      />
      <TextField
        {...register('phone')}
        type="tel"
        label={'Телефон:'}
        placeholder={'+7 (999) 999-9999'}
        error={errors.phone?.message}
      />
      <TextField
        {...register('birthday')}
        label={'Дата рождения:'}
        placeholder={'дд.мм.гггг'}
        error={errors.birthday?.message}
      />
      <Select {...register('role')} options={selectOptions} label={'Должность:'} />
      <Checkbox {...register('isArchive')} label={'В архиве'} />
      <Button type={'button'} variant={'secondary'} onClick={handleCancel}>
        Отмена
      </Button>
      <Button type={'submit'}>Сохранить</Button>
    </form>
  )
}
