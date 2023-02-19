import { SearchIcon } from '@/public/Icons'
import { TextInput } from 'flowbite-react'
import Link from 'next/link'

const TopMenu = () => {
    return (
        <div className='flex justify-between text-black text-lg pt-6 mb-16'>
            <div className='flex gap-9'>
                <Link href='/'>iPhone</Link>
                <Link href='/'>iPad</Link>
                <Link href='/'>iMac</Link>
                <Link href='/'>AirPods</Link>
                <Link href='/'>Watch</Link>
                <Link href='/'>Аксессуары</Link>
            </div>
            <div>
                <TextInput 
                icon={SearchIcon} 
                placeholder='Поиск' 
                color='transparent'
                style={{border: 0, fontSize: 18}}
                />
            </div>
        </div>
    )
}

export default TopMenu