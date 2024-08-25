import s from './ErrorPage.module.scss'

export const ErrorPage = () => {
  return (
    <div className={s.errorPage}>
      <span className={s.errorCode}>404</span>
      <span className={s.errorText}>Такой страницы не существует</span>
    </div>
  )
}
