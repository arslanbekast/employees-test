import { useSelector } from 'react-redux'
import { selectEmployees } from '@/features/employees/model/employees.selectors'
import s from './AppInfo.module.scss'

export const AppInfo = () => {
  const employees = useSelector(selectEmployees)
  return (
    <div className={s.appInfo}>
      <h1>Учет сотрудников компании</h1>
      <h2>Общее количество сотрудников - {employees.length}</h2>
    </div>
  )
}
