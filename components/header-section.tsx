import Image from 'next/image';
import React from 'react'

const HeaderSection = ({title, subtitle}:{
    title:string;
    subtitle:string;
}) => {
  return (
    <header className="relative h-[60px] text-white overflow-hidden">
        <div className='absolute inset-0'>
            <Image src="/images/hero.jpg" alt='img' fill className="object-cover object-center w-full h-full" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative flex flex-col justify-center items-center h-60 text-center pt-14">
            <h1 className="text-5xl font-bold leading-tight capitalize">{title}</h1>
            <p className="text-xl text-gray-50">{subtitle}</p>
        </div>

    </header>
  )
}

export default HeaderSection