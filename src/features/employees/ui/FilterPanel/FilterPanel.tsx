import s from './FilterPanel.module.scss'
import { useSelector } from 'react-redux'
import { selectFilter } from '@/features/employees/model/employees.selectors'
import { ChangeEvent } from 'react'
import { setFilter } from '@/features/employees/model/employeesSlice'
import { useAppDispatch } from '@/common/hooks/useAppDispatch'

export const FilterPanel = () => {
  const filter = useSelector(selectFilter)
  const dispatch = useAppDispatch()

  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter({ ...filter, role: e.target.value || null }))
  }

  const handleArchiveChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ ...filter, isArchive: e.target.checked }))
  }

  return (
    <div className={s.filterPanel}>
      <h2>Фильтр:</h2>
      <div className={s.filtersWrapper}>
        <select value={filter.role || ''} onChange={handleRoleChange}>
          <option value="">Все сотрудники</option>
          <option value="cook">Повар</option>
          <option value="waiter">Официант</option>
          <option value="driver">Водитель</option>
        </select>
        <div className={s.isArchiveWrapper}>
          <input id={'isArhive'} type={'checkbox'} onChange={handleArchiveChange} />
          <label htmlFor={'isArhive'}>В архиве</label>
        </div>
      </div>
    </div>
  )
}
