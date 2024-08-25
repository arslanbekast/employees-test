import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { useNavigate } from 'react-router-dom'
import { addEmployee, editEmployee, Employee } from '@/features/employees/model/employeesSlice'
import { z } from 'zod'
import { toast } from 'react-toastify'

const formSchema = z.object({
  name: z.string().min(2, 'Имя не должно быть менее 2 символов'),
  isArchive: z.boolean(),
  phone: z
    .string()
    .regex(/^\+7 \(\d{3}\) \d{3}-\d{4}$/, 'Телефон должен быть в формате +7 (999) 999-9999'),
  role: z.string(),
  birthday: z
    .string()
    .regex(/^\d{2}\.\d{2}\.\d{4}$/, 'Дата должна быть в формате дд.мм.гггг')
    .refine(
      val => {
        const [day, month, year] = val.split('.').map(Number)
        const date = new Date(year, month - 1, day)

        const today = new Date()

        // Проверяем, что дата корректная, не в будущем и возраст больше 0 лет
        return (
          date.getFullYear() === year &&
          date.getMonth() === month - 1 &&
          date.getDate() === day &&
          date < today &&
          today.getFullYear() - date.getFullYear() > 0
        )
      },
      {
        message: 'Введите корректную дату рождения. Возраст должен быть больше 0 лет.',
      }
    ),
})

type FormValues = z.infer<typeof formSchema>

export const useEmployeeForm = (employee?: Employee) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: employee?.name || '',
      isArchive: employee?.isArchive || false,
      role: employee?.role || 'cook',
      phone: employee?.phone || '',
      birthday: employee?.birthday || '',
    },
    resolver: zodResolver(formSchema),
  })
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleCancel = () => {
    navigate('/')
  }

  const onSubmit = (data: FormValues) => {
    if (employee) {
      dispatch(editEmployee({ ...employee, ...data }))
      toast.success(`Отредактирован сотрудник с id - ${employee.id}`)
    } else {
      dispatch(addEmployee({ id: Date.now(), ...data }))
      toast.success(`Добавлен сотрудник - ${data.name}`)
    }
    navigate('/')
  }

  return {
    register,
    handleSubmit,
    handleCancel,
    onSubmit,
    errors,
  }
}
