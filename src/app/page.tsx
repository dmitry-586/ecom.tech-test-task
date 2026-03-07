import Image from 'next/image'

export default function Home() {
  return (
    <main className='my-auto flex h-full flex-col items-center justify-center gap-2'>
      <Image src='/nextjs.svg' alt='nextjs' width={100} height={60} />
      <h1 className='text-2xl font-bold'>Project Template</h1>
    </main>
  )
}
