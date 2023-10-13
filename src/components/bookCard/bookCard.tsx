import Image from 'next/image'
import Link from 'next/link';
import React, { FC } from 'react'

interface IBookCard{
    href:string;
    src?:string;
    label:string;
}

const BookCard:FC<IBookCard> = ({href,src,label}) => {
  return (
    <Link className='' href={href}>
        <div className='max-w-[250px] bg-[#22252a] rounded border border-transparent hover: shadow-md no-underline p-5 flex flex-row items-center justify-start hover:bg-[#151619]'>

        {src&& <Image src={src} alt={label} 
          width={28}
          height={28}
          priority /> }
        <span className='ml-2'>{label}</span>
        </div>
    </Link>
  )
}

export  {BookCard}