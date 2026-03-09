import type { Product } from '@/shared/types'
import { Skeleton } from '@/shared/ui'
import { Card } from './Card'

interface ProductListProps {
  products: Product[]
  isLoading: boolean
  onProductClick: (product: Product) => void
}

export function ProductList({
  products,
  isLoading,
  onProductClick,
}: ProductListProps) {
  if (isLoading) {
    return (
      <div className='grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} className='h-64' />
        ))}
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className='col-span-full py-24 text-center text-white/40'>
        Ничего не найдено по вашему запросу
      </div>
    )
  }

  return (
    <div className='grid w-full grid-cols-1 gap-6 max-sm:max-w-sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          onClick={() => onProductClick(product)}
        />
      ))}
    </div>
  )
}
