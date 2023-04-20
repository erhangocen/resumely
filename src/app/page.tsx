import Image from 'next/image'
import { Inter } from 'next/font/google'
import Paragraph from '../components/ui/paragraph'
import { Metadata } from 'next'
import LargeHeading from '@/components/ui/largeHeading'
import Link from 'next/link'


export const metadata: Metadata = {
  title: "Resumely",
  description: "A prefect resume builder",
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='relative lg:h-screen flex items-center justify-center overflow-x-hidden '>
      {<div className='flex flex-col lg:flex-row container pt-32 max-w-7xl mx-auto w-full h-full overflow-y-hidden'>
        <div className='lg:basis-2/3'>
          <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          
          <LargeHeading size={'lg'} className='three-d text-black dark:text-light-gold '>
            Easily Create  Your<br /> Own Resume !
          </LargeHeading>
          <Paragraph className='max-w-xl lg:text-left'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, eaque culpa. Facere corrupti ipsum similique excepturi recusandae repellat, velit dolore earum eum laborum voluptatum nostrum, rerum adipisci eos! {" "}
            <Link 
              href="/login" 
              className='underline underline-offset-2 text-black dark:text-light-gold'
            >
              Learn More
            </Link>
          </Paragraph>
        </div>
        </div>
        
        <div className='lg:basis-1/3'>
        <div className='w-full lg:left-5 grid lg:justify-end relative justify-center pt-10 aspect-square swing-animation'>
          <Image
            priority
            className='img-shadow object-contain lg:max-w-xl max-w-xs'
            quality={100}
            width={500}
            height={500}  
            src="/resume_illustrator.png"
            alt="resume"
          />
        </div>
        </div>
      </div>}
    </div>
  )
}
