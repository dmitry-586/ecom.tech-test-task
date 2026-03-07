export const queryKeys = {
  products: {
    list: () => ['products', 'list'] as const,
    detail: (id: number) => ['products', 'detail', id] as const,
  },
} as const
