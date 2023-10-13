'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { Header } from '@/components/header/header'
import { Tab } from '@/components/tab/tab'
import { BookCard } from '@/components/bookCard/bookCard'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={'bg-[#1c1f25] h-[1200px]'}>
      <Header/>
      <div className='container mx-auto'>
        <section>

        <div className='mt-36'>
          <h1>Click.</h1>
          <h1>Code.</h1>
          <h1 className='text-[#8571f9]'>Done.</h1>
        </div>
        <p className='w-3/6 mt-5 text-[18px] font-normal leading-loose text-[#b6b7b9] text-ellipsis	align-baseline'>Stay in the flow with instant dev experiences. No more hours stashing/pulling/installing locally — just click, and start coding.</p>
        </section>
        <section className='mt-36 w-full  '>
          <div className='border flex flex-col items-center  '>
            <h3 className='mb-12 text-[#b6b7b9] text-[36px]'>Boot a fresh environment in <strong className='text-white'>milliseconds.</strong></h3>
            <div className=' w-5/6 mb-6'>

            <Tab/>
            </div>
            <div className=' w-5/6  mx-auto grid grid-cols-4 gap-4'>
              <BookCard href='/' src='/site_logo.png' label='React' />
              <BookCard href='/' src='/site_logo.png' label='React' />
              <BookCard href='/' src='/site_logo.png' label='React' />
              <BookCard href='/' src='/site_logo.png' label='React' />
              <BookCard href='/' src='/site_logo.png' label='React' />
            </div>
          </div>
        </section>

        {/* blogs and news */}
        <section className='mt-36 w-full  '>
          <div className='border flex flex-col items-center  '>
            <h3 className='mb-12 text-[#b6b7b9] text-[36px]'>Boot a fresh environment in <strong className='text-white'>milliseconds.</strong></h3>
            <div className=' w-5/6 mb-6'>

            {/* <Tab/> */}
            </div>
            <div className=' w-5/6  mx-auto grid grid-cols-4 gap-4'>
              {/* <BookCard href='/' src='/site_logo.png' label='React' />
              <BookCard href='/' src='/site_logo.png' label='React' />
              <BookCard href='/' src='/site_logo.png' label='React' />
              <BookCard href='/' src='/site_logo.png' label='React' />
              <BookCard href='/' src='/site_logo.png' label='React' /> */}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
