import { PageTitle } from '@/common/components/PageTitle/PageTitle'
import { Employees } from '@/features/employees/ui/Employees'
import { Button } from '@/common/components/Button/Button'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div>
      <PageTitle title={'Учет сотрудников компании'} />
      <Employees />
      <Button as={Link} to={'/add/'} fullWidth={true}>
        Добавить нового сотрудника
      </Button>
    </div>
  )
}
