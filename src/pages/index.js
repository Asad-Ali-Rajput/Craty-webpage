import { Inter } from 'next/font/google'
import HomeLayout from '@/components/Home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`bg-white ${inter.className}`}
    >
      <HomeLayout />
    </main>
  )
}
