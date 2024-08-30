import { RootState } from '@/app/store'
import { createSelector } from '@reduxjs/toolkit'

export const selectEmployees = (state: RootState) => state.employees.employees
export const selectRoles = (state: RootState) => state.employees.roles
export const selectFilter = (state: RootState) => state.employees.filter
export const selectSort = (state: RootState) => state.employees.sort
export const selectEmployeeById = (state: RootState, id: number | undefined) =>
  state.employees.employees.find(employee => employee.id === id)

export const selectEmployeesByFilter = createSelector(
  [selectEmployees, selectFilter],
  (employees, filter) => {
    return employees.filter(
      emp =>
        (filter.role ? emp.role === filter.role : true) && (filter.isArchive ? emp.isArchive : true)
    )
  }
)
