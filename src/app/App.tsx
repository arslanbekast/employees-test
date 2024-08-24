import { useEffect } from 'react'
import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { Employees } from '@/features/employees/ui/Employees'
import { setEmployees } from '@/features/employees/model/employeesSlice'
import s from './App.module.scss'
import { AppInfo } from '@/app/AppInfo/AppInfo'

export function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetch('/employees.json')
      .then(response => response.json())
      .then(jsonData => dispatch(setEmployees(jsonData)))
  }, [])

  return (
    <div className={s.app}>
      <AppInfo />
      <Employees />
    </div>
  )
}
