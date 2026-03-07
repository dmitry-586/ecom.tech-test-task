import type { Product } from '@/shared/types/api'
import { NextResponse } from 'next/server'

const products: Product[] = [
  {
    id: 1,
    title: 'Смарт-часы X100',
    price: 7490,
    category: 'Гаджеты',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
    description:
      'Водонепроницаемые, GPS, 7-дневный аккумулятор. Идеально подходят для спорта и повседневной жизни.',
  },
  {
    id: 2,
    title: 'Беспроводные наушники Pro',
    price: 12990,
    category: 'Аудио',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    description:
      'Активное шумоподавление, до 30 часов работы, кристально чистый звук.',
  },
  {
    id: 3,
    title: 'Смартфон Z-Phone 5',
    price: 54990,
    category: 'Смартфоны',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop',
    description:
      'AMOLED экран 120Гц, тройная камера 108Мп, быстрая зарядка 65Вт.',
  },
  {
    id: 4,
    title: 'Ноутбук Air 13',
    price: 89900,
    category: 'Компьютеры',
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop',
    description:
      'Тонкий, легкий и мощный. Процессор последнего поколения, 16ГБ ОЗУ, 512ГБ SSD.',
  },
  {
    id: 5,
    title: 'Планшет Tab S8',
    price: 34990,
    category: 'Гаджеты',
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop',
    description:
      'Отличный экран для работы и развлечений. Поддержка стилуса в комплекте.',
  },
  {
    id: 6,
    title: 'Колонки HomeMax',
    price: 15990,
    category: 'Аудио',
    image:
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1000&auto=format&fit=crop',
    description:
      'Мощный бас и объемный звук. Подключение по Bluetooth и Wi-Fi.',
  },
]

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return NextResponse.json(products)
}
