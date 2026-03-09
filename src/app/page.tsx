'use client'

import { ModalCard, ProductList, ProductSearch } from '@/features/Product'
import { useProducts } from '@/services'
import type { Product } from '@/shared/types'
import { useState } from 'react'

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const { products, isLoading } = useProducts(searchQuery)

  return (
    <main className='mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-4 py-10'>
      <ProductSearch onSearch={setSearchQuery} />

      <ProductList
        products={products}
        isLoading={isLoading}
        onProductClick={setSelectedProduct}
      />

      <ModalCard
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </main>
  )
}
