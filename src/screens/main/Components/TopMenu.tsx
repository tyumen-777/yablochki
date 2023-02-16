import Link from 'next/link'
import React from 'react'

const TopMenu = () => {
    return (
        <div className='flex justify-between text-black text-lg pt-6'>
            <div className='flex gap-9'>
                <Link href='/'>iPhone</Link>
                <Link href='/'>iPad</Link>
                <Link href='/'>iMac</Link>
                <Link href='/'>AirPods</Link>
                <Link href='/'>Watch</Link>
                <Link href='/'>Аксессуары</Link>
            </div>
            <div>
                Поиск
            </div>
        </div>
    )
}

export default TopMenu