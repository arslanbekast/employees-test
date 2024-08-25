import { describe, it, expect } from 'vitest'
import {
  employeesReducer,
  setEmployees,
  addEmployee,
  editEmployee,
  setFilter,
  setSort,
  Employee,
  EmployeeState,
} from '../employeesSlice'

// Изначальное состояние для тестов
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

describe('employeesSlice', () => {
  it('should handle setEmployees action', () => {
    const newEmployees: Employee[] = [
      {
        id: 1,
        name: 'Иван Иванов',
        isArchive: false,
        role: 'cook',
        phone: '+7 (956) 654-6789',
        birthday: '23.09.1987',
      },
      {
        id: 2,
        name: 'Сергей Никифоров',
        isArchive: false,
        role: 'waiter',
        phone: '+7 (988) 456-8767',
        birthday: '25.11.1967',
      },
    ]

    const state = employeesReducer(initialState, setEmployees(newEmployees))
    expect(state.employees).toEqual(newEmployees)
  })

  it('should handle addEmployee action', () => {
    const newEmployee: Employee = {
      id: 3,
      name: 'Алиса Иванова',
      isArchive: false,
      role: 'driver',
      phone: '+7 (988) 456-8767',
      birthday: '26.10.1988',
    }

    const state = employeesReducer(initialState, addEmployee(newEmployee))
    expect(state.employees[0]).toEqual(newEmployee)
  })

  it('should handle editEmployee action', () => {
    const existingState: EmployeeState = {
      ...initialState,
      employees: [
        {
          id: 1,
          name: 'Иван Иванов',
          isArchive: false,
          role: 'cook',
          phone: '+7 (956) 654-6789',
          birthday: '23.09.1987',
        },
      ],
    }

    const updatedEmployee: Employee = {
      id: 1,
      name: 'Иван Петров',
      isArchive: false,
      role: 'cook',
      phone: '+7 (956) 654-6789',
      birthday: '23.09.1987',
    }

    const state = employeesReducer(existingState, editEmployee(updatedEmployee))
    expect(state.employees[0]).toEqual(updatedEmployee)
  })

  it('should handle setFilter action', () => {
    const newFilter = { role: 'cook', isArchive: true }

    const state = employeesReducer(initialState, setFilter(newFilter))
    expect(state.filter).toEqual(newFilter)
  })

  it('should handle setSort action', () => {
    const newSort: EmployeeState['sort'] = 'name'

    const state = employeesReducer(initialState, setSort(newSort))
    expect(state.sort).toEqual(newSort)
  })

  it('should handle setSort action to null', () => {
    const existingState: EmployeeState = {
      ...initialState,
      sort: 'name',
    }

    const state = employeesReducer(existingState, setSort(null))
    expect(state.sort).toBeNull()
  })
})
