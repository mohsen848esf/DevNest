
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 5) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <header className={`w-full text-white body-font mb-4 shadow-sm transition-all duration-300  ${scrolled?'bg-[#151619] fixed top-0':''}`}>

      {/* :DESKTOP MENU */}
      <div className="container mx-auto flex justify-between items-center py-3 ">
        {/* ::Site logo and Name */}
        <Link href="/" className=" flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0">
            <Image           src="/site_logo.png" className='ml-2'
          alt="Next.js Logo"
          width={25}
          height={25}
          priority />
          <span className=" text-xl text-white font-semibold antialiased">EV<span className='text-xl text-[#8571f9] font-bold antialiased'>N</span>EST</span>
        </Link>
        {/* ::Navbar */}
        <nav className="hidden md:flex flex-wrap items-center justify-center text-base tracking-wide">
          <a href="#link" className="mr-8 hover:text-indigo-500">Solutions</a>
          <a href="#link" className="mr-8 hover:text-indigo-500">Prices</a>
          <a href="#link" className="mr-8 hover:text-indigo-500">About</a>
          <a href="#link" className="mr-8 hover:text-indigo-500">Contact</a>
        </nav>
        {/* ::Avatar */}
        <Link href={'/'} className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
            signin
        </Link>
        {/* ::Burger icon standard */}
        <button 
          className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-md text-gray-500 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-purple-500 hover:to-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* ::MOBILE MENU */}
      { isOpen &&
        <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-50 text-base uppercase text-center font-semibold">
          <Link  href="#link" className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-indigo-700">Solutions</Link>
          <Link  href="#link" className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-indigo-700">Prices</Link>
          <Link  href="#link" className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-indigo-700">About</Link>
          <Link  href="#link" className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-indigo-700">Contact</Link>
        </div>
      }
    </header>
  )
}

export  {Header}
