import { useEffect } from 'react'
import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { setEmployees } from '@/features/employees/model/employeesSlice'
import s from './App.module.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { EditEmployeePage } from '@/pages/EditEmployeePage/EditEmployeePage'
import { HomePage } from '@/pages/HomePage/HomePage'
import { AddEmployeePage } from '@/pages/AddEmployeePage/AddEmployeePage'
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
    <BrowserRouter>
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
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/edit/:id'} element={<EditEmployeePage />} />
          <Route path={'/add/'} element={<AddEmployeePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
