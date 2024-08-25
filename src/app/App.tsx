import { useEffect } from 'react'
import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { setEmployees } from '@/features/employees/model/employeesSlice'
import s from './App.module.scss'
import { Outlet } from 'react-router-dom'
import { setAppInitialized } from '@/app/appSlice'
import { useSelector } from 'react-redux'
import { selectIsInitialized } from '@/app/app.selectors'
import { CircularProgress } from '@/common/components/CircularProgress/CircularProgress'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function App() {
  const dispatch = useAppDispatch()
  const isInitialized = useSelector(selectIsInitialized)

  useEffect(() => {
    fetch('/employees.json')
      .then(response => response.json())
      .then(jsonData => {
        dispatch(setEmployees(jsonData))
      })
      .catch(() => {
        toast.error('Произошла ошибка при загрузке данных!')
      })
      .finally(() => dispatch(setAppInitialized(true)))
  }, [dispatch])

  if (!isInitialized) {
    return <CircularProgress />
  }

  return (
    <div className={s.app}>
      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position={'bottom-left'}
        rtl={false}
      />
      <Outlet />
    </div>
  )
}
