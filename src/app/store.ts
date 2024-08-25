import { configureStore } from '@reduxjs/toolkit'
import { employeesReducer } from '@/features/employees/model/employeesSlice'
import { appReducer } from '@/app/appSlice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    employees: employeesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
