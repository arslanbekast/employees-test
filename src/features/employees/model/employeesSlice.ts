import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: EmployeeState = {
  employees: [],
  roles: {
    cook: 'Повар',
    waiter: 'Официант',
    driver: 'Водитель',
  },
  filter: {
    role: null,
    isArchive: false,
  },
  sort: null,
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload
    },
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload)
    },
    editEmployee: (state, action: PayloadAction<Employee>) => {
      const index = state.employees.findIndex(emp => emp.id === action.payload.id)
      if (index >= 0) {
        state.employees[index] = action.payload
      }
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload
    },
    setSort: (state, action: PayloadAction<Sort | null>) => {
      state.sort = action.payload
    },
  },
})

export const employeesReducer = employeesSlice.reducer
export const { setEmployees, addEmployee, editEmployee, setFilter, setSort } =
  employeesSlice.actions

// types
type Employee = {
  id: number
  name: string
  isArchive: boolean
  role: string
  phone: string
  birthday: string
}

type Filter = {
  role: string | null
  isArchive: boolean
}
type Roles = {
  [key: string]: string
}
export type Sort = 'name' | 'birthday'

type EmployeeState = {
  employees: Employee[]
  roles: Roles
  filter: Filter
  sort: Sort | null
}
