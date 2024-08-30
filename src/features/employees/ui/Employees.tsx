import s from './Employees.module.scss'
import { useSelector } from 'react-redux'
import {
  selectEmployeesByFilter,
  selectRoles,
  selectSort,
} from '@/features/employees/model/employees.selectors'
import { FilterPanel } from '@/features/employees/ui/FilterPanel/FilterPanel'
import { SortPanel } from '@/features/employees/ui/SortPanel/SortPanel'
import { Link } from 'react-router-dom'

export const Employees = () => {
  let modifiedEmployees = useSelector(selectEmployeesByFilter)
  const roles = useSelector(selectRoles)
  const sort = useSelector(selectSort)

  if (sort) {
    modifiedEmployees = modifiedEmployees.slice().sort((a, b) => {
      if (sort === 'birthday') {
        const dateA = new Date(a[sort].split('.').reverse().join('-')).getTime()
        const dateB = new Date(b[sort].split('.').reverse().join('-')).getTime()
        return dateA - dateB
      }

      if (a[sort] < b[sort]) return -1
      if (a[sort] > b[sort]) return 1
      return 0
    })
  }

  return (
    <div className={s.employees}>
      <FilterPanel />
      <SortPanel />
      <ul className={s.employeesList}>
        {modifiedEmployees.map(employee => {
          return (
            <li key={employee.id} className={s.employeesItem}>
              <Link to={`/edit/${employee.id}`}>
                <span className={s.name}>{employee.name}</span>
                <span className={s.role}>{roles[employee.role]}</span>
                <span className={s.phone}>{employee.phone}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
