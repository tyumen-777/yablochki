import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface IFooter {
}

export const Footer: FC<IFooter> = (props) => {

  //Renders
  return (
    <footer className='bg-secondary text-white py-7'>
      <div className='container mx-auto flex justify-between max-w-7xl'>
        <div className='flex container w-72 justify-between'>
          <div className='flex flex-col gap-2'>
            <Link href='/'>Каталог</Link>
            <Link href='/'>iPhone</Link>
            <Link href='/'>MacBook</Link>
            <Link href='/'>iPad</Link>
            <Link href='/'>AirPods</Link>
            <Link href='/'>Watch</Link>
            <Link href='/'>iMac</Link>
            <Link href='/'>Аксессуары</Link>
          </div>
          <div className='flex flex-col gap-2'>
            <Link href='/'>Покупателям</Link>
            <Link href='/'>Акции</Link>
            <Link href='/'>Гарантии</Link>
            <Link href='/'>Доставка и оплата</Link>
            <Link href='/'>О компании</Link>
            <Link href='/'>Контакты</Link>
            <Link href='/'>Отзывы</Link>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <a href="tel:89220037563">8(922)0037563</a>
          <a href='mailto:tyumen-777@yandex.ru' className='underline'>tyumen-777@yandex.ru</a>
          <p>Часы работы:  с 10:00 до 24:00</p>
          <div className='flex items-center gap-2'>
            <p>Связаться с нами :</p>
            <a href='https://telegram.me/bmwf80' target="_blank" rel="noreferrer"><Image src='/assets/icons/Telegram.png' alt='' width={42} height={42}/></a>
            <a href='tel:89220037563'><Image src='/assets/icons/Phone.png' alt='' width={42} height={42}/></a>

          </div>
        </div>
      </div>

    </footer>
  );
};