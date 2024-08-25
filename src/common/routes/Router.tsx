import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from '@/pages/ErrorPage/ErrorPage'
import { AddEmployeePage } from '@/pages/AddEmployeePage/AddEmployeePage'
import { EditEmployeePage } from '@/pages/EditEmployeePage/EditEmployeePage'
import { HomePage } from '@/pages/HomePage/HomePage'
import { App } from '@/app/App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/add/', element: <AddEmployeePage /> },
      { path: '/edit/:id', element: <EditEmployeePage /> },
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
