import { productsService } from '@/services/products'
import { queryKeys } from '@/shared/lib'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export function useProducts(searchQuery: string = '') {
  const { data: products = [], isLoading } = useQuery({
    queryKey: queryKeys.products,
    queryFn: productsService.getProducts,
  })

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return products

    const query = searchQuery.toLowerCase()
    return products.filter((product) =>
      product.title.toLowerCase().includes(query),
    )
  }, [products, searchQuery])

  return {
    products: filteredProducts,
    isLoading,
    totalCount: products.length,
    filteredCount: filteredProducts.length,
  }
}
