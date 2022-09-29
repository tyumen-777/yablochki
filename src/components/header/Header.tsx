import React, { FC } from 'react';
import Link from 'next/link';
import { HeaderSearch } from './HeaderSearch';
import { HeaderCity } from './HeaderCity';

interface IHeader {
}

export const Header: FC<IHeader> = (props) => {

  //Renders
  return (
    <header className='bg-primary flex py-6'>
      <div className='mx-auto container flex items-center max-w-7xl'>
        <div className='flex text-white text-xl max-w-3xl justify-between w-full'>
          <Link href='/'>
            Главная
          </Link>
          <Link href='/'>
            Каталог
          </Link>
          <Link href='/'>
            Гарантия
          </Link>
          <Link href='/'>
            Доставка и оплата
          </Link>
          <Link href='/'>
            Отзывы
          </Link>
          <Link href='/'>
            Контакты
          </Link>
        </div>
        <div className='ml-20 mr-20'>
          <HeaderSearch />
        </div>
        <HeaderCity />
      </div>
    </header>
  );
};