import s from './SortPanel.module.scss'
import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { setSort, Sort } from '@/features/employees/model/employeesSlice'
import { useSelector } from 'react-redux'
import { selectSort } from '@/features/employees/model/employees.selectors'
import { memo } from 'react'

export const SortPanel = memo(() => {
  const dispatch = useAppDispatch()
  const sort = useSelector(selectSort)

  const handleSortChange = (sortValue: Sort) => {
    const newValue = sortValue === sort ? null : sortValue
    dispatch(setSort(newValue))
  }

  return (
    <div className={s.sortPanel}>
      <span>Сортировать:</span>
      <div className={s.btnsWrapper}>
        <button
          onClick={() => handleSortChange('name')}
          className={sort === 'name' ? s.active : ''}
        >
          по Имени
        </button>
        <button
          onClick={() => handleSortChange('birthday')}
          className={sort === 'birthday' ? s.active : ''}
        >
          по Дате
        </button>
      </div>
    </div>
  )
})
