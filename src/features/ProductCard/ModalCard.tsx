import type { Product } from '@/shared/types'
import { Button, Modal } from '@/shared/ui'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'

interface ModalCardProps {
  selectedProduct: Product | null
  setSelectedProduct: (product: Product | null) => void
}

export function ModalCard({
  selectedProduct,
  setSelectedProduct,
}: ModalCardProps) {
  return (
    <Modal
      isOpen={!!selectedProduct}
      onClose={() => setSelectedProduct(null)}
      title={selectedProduct?.title}
      className='max-sm:max-w-sm'
    >
      {selectedProduct && (
        <div className='flex flex-col gap-2 sm:flex-row sm:gap-5 md:gap-8'>
          <div className='relative aspect-square w-full shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:w-64'>
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.title}
              fill
              className='object-cover'
            />
          </div>
          <div className='flex flex-1 flex-col justify-between py-2'>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center justify-between'>
                <span className='rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/60'>
                  {selectedProduct.category}
                </span>
                <p className='text-primary text-lg font-bold sm:text-xl md:text-2xl'>
                  {selectedProduct.price} ₽
                </p>
              </div>
              <div className='flex flex-col gap-1 sm:gap-2'>
                <h4 className='font-semibold text-white sm:text-lg'>
                  Описание
                </h4>
                <p className='text-sm text-white/70 lg:text-base'>
                  {selectedProduct.description}
                </p>
              </div>
            </div>
            <Button className='mt-5 w-full gap-2 py-3 sm:mt-8'>
              <ShoppingCart size={20} />
              Купить сейчас
            </Button>
          </div>
        </div>
      )}
    </Modal>
  )
}
