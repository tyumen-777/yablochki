import React from 'react'
import Image from 'next/image'
import cardPic from 'public/iphonesmall.png'
import Link from 'next/link'

const MainCard = () => {
  return (
    <Link href='/' className='flex justify-center'>
    <div className='bg-white w-72 h-80 rounded-2xl px-6 pt-8 flex flex-col items-center justify-between'>
        <h2 className='text-3xl'>iPhone</h2>
        <p className='text-base'>от 49 990 ₽</p>
        <Image src={cardPic} alt='Category Picture' className='w-48 h-48 object-cover object-top' />
    </div>
    </Link>
  )
}

export default MainCard