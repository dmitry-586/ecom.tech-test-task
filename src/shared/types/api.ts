export interface ApiError {
  message: string
  status?: number
  code?: string
}

export interface Product {
  id: number
  title: string
  price: number
  category: string
  image: string
  description: string
}
