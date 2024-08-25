import s from './FilterPanel.module.scss'
import { useSelector } from 'react-redux'
import { selectFilter } from '@/features/employees/model/employees.selectors'
import { ChangeEvent, memo } from 'react'
import { setFilter } from '@/features/employees/model/employeesSlice'
import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { Select } from '@/common/components/Select/Select'
import { Checkbox } from '@/common/components/Checkbox/Checkbox'

const selectOptions = [
  { id: 1, value: '', label: 'Все сотрудники' },
  { id: 2, value: 'cook', label: 'Повар' },
  { id: 3, value: 'waiter', label: 'Официант' },
  { id: 4, value: 'driver', label: 'Водитель' },
]

export const FilterPanel = memo(() => {
  const filter = useSelector(selectFilter)
  const dispatch = useAppDispatch()

  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter({ ...filter, role: e.currentTarget.value || null }))
  }

  const handleArchiveChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ ...filter, isArchive: e.target.checked }))
  }

  return (
    <div className={s.filterPanel}>
      <h2>Фильтр:</h2>
      <div className={s.filtersWrapper}>
        <Select value={filter.role || ''} options={selectOptions} onChange={handleRoleChange} />
        <Checkbox label={'В архиве'} onChange={handleArchiveChange} />
      </div>
    </div>
  )
})
