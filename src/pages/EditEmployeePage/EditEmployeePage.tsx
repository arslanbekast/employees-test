import { EmployeeForm } from '@/features/employees/ui/EmployeeForm/EmployeeForm'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import s from './EditEmployeePage.module.scss'
import { PageTitle } from '@/common/components/PageTitle/PageTitle'
import { selectEmployeeById } from '@/features/employees/model/employees.selectors'

type RouteParams = {
  id: string
}

export const EditEmployeePage = () => {
  const { id } = useParams<RouteParams>()
  const navigate = useNavigate()

  // Ищем сотрудника в списке по ID
  const employee = useSelector((state: RootState) => selectEmployeeById(state, id))

  // Если сотрудник не найден, перенаправляем на главную страницу
  if (!employee) {
    navigate('/')
    return null
  }
  return (
    <div>
      <PageTitle title={'Редактирование сотрудника'} />
      <div className={s.formWrapper}>
        <EmployeeForm employee={employee} />
      </div>
    </div>
  )
}
