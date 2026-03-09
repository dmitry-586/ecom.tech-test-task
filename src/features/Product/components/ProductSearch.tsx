import { Input } from '@/shared/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const searchSchema = z.object({
  query: z.string().max(50, 'Слишком длинный запрос'),
})

type SearchFormValues = z.infer<typeof searchSchema>

interface ProductSearchProps {
  onSearch: (query: string) => void
}

export function ProductSearch({ onSearch }: ProductSearchProps) {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: { query: '' },
    mode: 'onChange',
  })

  const searchQuery = watch('query')

  useEffect(() => {
    onSearch(searchQuery)
  }, [searchQuery, onSearch])

  return (
    <Input
      label='Поиск'
      leftIcon={Search}
      placeholder='Найти товар...'
      wrapperCN='w-full max-w-xl'
      error={errors.query?.message}
      {...register('query')}
    />
  )
}
