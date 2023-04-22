import Image from 'next/image'
import { Inter } from 'next/font/google'
import Paragraph from '../components/ui/paragraph'
import { Metadata } from 'next'
import LargeHeading from '@/components/ui/largeHeading'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import Lending from '@/components/home/lending'


export const metadata: Metadata = {
  title: "Resumely",
  description: "A prefect resume builder",
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='relative lg:min-h-screen flex flex-col items-center justify-center overflow-x-hidden '>
      <Lending/>

    </div>
  )
}
