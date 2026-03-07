import { api } from '@/shared/lib/api-client'
import type { Product } from '@/shared/types/api'

export const productsService = {
  getProducts: async () => {
    const response = await api.get<Product[]>('/products')
    return response.data
  },

  getProductById: async (id: number) => {
    const products = await productsService.getProducts()
    return products.find((p) => p.id === id)
  },
}
