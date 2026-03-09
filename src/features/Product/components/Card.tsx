import type { Product } from '@/shared/types'
import Image from 'next/image'

interface CardProps {
  product: Product
  onClick: () => void
}

export function Card({ product, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className='group relative flex max-w-sm cursor-pointer flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-2 transition-all duration-200 hover:border-white/30 hover:bg-white/10'
    >
      <div className='relative aspect-square overflow-hidden rounded-xl'>
        <Image
          src={product.image}
          alt={product.title}
          fill
          className='object-cover duration-400 group-hover:scale-110'
        />
      </div>
      <div className='flex flex-1 flex-col justify-between gap-2'>
        <h3 className='font-medium text-white'>{product.title}</h3>
        <p className='text-primary text-lg font-medium'>{product.price} ₽</p>
      </div>
    </div>
  )
}
