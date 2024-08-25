import s from './PageTitle.module.scss'

type PageTitleProps = {
  title: string
}

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className={s.pageTitle}>
      <h1>{title}</h1>
    </div>
  )
}
