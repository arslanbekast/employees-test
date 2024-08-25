import s from './PageTitle.module.scss'
import { memo } from 'react'

type PageTitleProps = {
  title: string
}

export const PageTitle = memo(({ title }: PageTitleProps) => {
  return (
    <div className={s.pageTitle}>
      <h1>{title}</h1>
    </div>
  )
})
