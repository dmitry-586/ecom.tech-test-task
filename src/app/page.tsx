'use client'

import { ModalCard } from '@/features/ProductCard'
import type { Product } from '@/shared/types'
import { Input } from '@/shared/ui'
import { Search } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <main className='mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-4 py-10'>
      <Input
        label='Поиск'
        leftIcon={Search}
        placeholder='Найти товар...'
        wrapperCN='w-full max-w-xl'
      />

      <ModalCard
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </main>
  )
}
