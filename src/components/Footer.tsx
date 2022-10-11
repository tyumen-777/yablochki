import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface IFooter {
}

export const Footer: FC<IFooter> = (props) => {

  //Renders
  return (
    <footer className='bg-footer text-white py-7'>
      <div className='container mx-auto flex justify-between max-w-7xl items-center'>
        <div className='flex container w-1/3 justify-between'>
          <div className='flex flex-col gap-4'>
            <Link href='/'>@Logo</Link>
            <a href='tel:83452123456'>+7(3452)123456</a>
            <a href='mailto:tyumen-777@yandex.ru' className='underline'>tyumen-777@yandex.ru</a>
            <div className='flex gap-2'>
              <a href='https://telegram.me/bmwf80' target='_blank' rel='noreferrer'><Image
                src='/assets/icons/Telegram.svg' alt='' width={42} height={42} /></a>
              <a href='tel:89220037563'><Image src='/assets/icons/Phone.svg' alt='' width={42} height={42} /></a>
            </div>
            <p className='text-grey mt-4'>Часы работы: с 10:00 до 24:00</p>
          </div>
        </div>
        <div className='flex w-2/3 gap-24'>
          <div className='flex flex-col gap-8'>
            <Link href='/'>Главная</Link>
            <Link href='/'>Каталог</Link>
            <Link href='/'>Акции</Link>
          </div>
          <div className='flex flex-col gap-8'>
            <Link href='/'>Доставка и оплата</Link>
            <Link href='/'>Отзывы</Link>
            <Link href='/'>Гарантия</Link>
          </div>
          <div className='flex flex-col gap-8'>
            <Link href='/'>О компании</Link>
            <Link href='/'>Контакты</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};