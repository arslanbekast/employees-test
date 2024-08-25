import { PageTitle } from '@/common/components/PageTitle/PageTitle'
import { EmployeeForm } from '@/features/employees/ui/EmployeeForm/EmployeeForm'
import s from './AddEmployeePage.module.scss'

export const AddEmployeePage = () => {
  return (
    <div>
      <PageTitle title={'Добавление сотрудника'} />
      <div className={s.formWrapper}>
        <EmployeeForm />
      </div>
    </div>
  )
}
