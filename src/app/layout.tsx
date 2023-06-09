import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Providers from '@/components/providers'
import CustomToaster from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { ParallaxProvider } from 'react-scroll-parallax'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(
      "bg-white text-slate-900 antialiased", inter.className
    )}>
      <head></head>
      <body className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'>
        <Providers>
          
          {children}
          <CustomToaster position={"bottom-right"} />
          {/* @ts-expect-error Server Component */}
          <Navbar/>
        </Providers>
        <div className='h-40 md:hidden'/>
        <Footer/>
      </body>
    </html>
  )
}
