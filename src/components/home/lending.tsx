"use client"
import { ArrowDown } from 'lucide-react'
import React, { useRef } from 'react'
import LargeHeading from '../ui/largeHeading'
import Paragraph from '../ui/paragraph'
import Image from 'next/image'
import Link from 'next/link'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";


export default function Lending() {

  return (
    <section>
      <MouseParallaxContainer globalFactorX={0.15} globalFactorY={0.15}>
      <div className='flex flex-col lg:flex-row container pt-16 max-w-7xl mx-auto w-full h-full overflow-y-hidden overflow-x-hidden'>
        <div className='lg:basis-2/3'>
          <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>

            <LargeHeading size={'lg'} className='three-d text-black dark:text-light-gold '>
              Easily Create  Your<br /> Own Resume !
            </LargeHeading>
            <Paragraph className='max-w-xl lg:text-left'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, eaque culpa. Facere corrupti ipsum similique excepturi recusandae repellat, velit dolore earum eum laborum voluptatum nostrum, rerum adipisci eos! <br />
              <Link
                href="/login"
                className='flex underline underline-offset-2 text-black dark:text-light-gold'
              >
                Learn More <ArrowDown className='pt-1' />

              </Link>
            </Paragraph>
          </div>
        </div>
        
        <div className='lg:basis-1/3'>
          <div className='w-full lg:left-5 grid lg:justify-end relative justify-center pt-10 aspect-square'>
            <MouseParallaxChild  factorX={0.15} factorY={0.1}>
            <Image
              priority
              className='img-shadow object-contain lg:max-w-xl max-w-xs'
              quality={100}
              width={500}
              height={500}
              src="/resume_illustrator.png"
              alt="resume"
            />
            </MouseParallaxChild>
            {/* <Parallax bgImage={'/resume_illustrator.png'} bgImageAlt="the cat" strength={200} blur={10}>asdasd</Parallax> */}
            
            
            
          </div>
        </div>

      </div>
      </MouseParallaxContainer>
    </section>
  )
}
