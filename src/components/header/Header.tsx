import React, { FC } from 'react';
import Link from 'next/link';
import { HeaderSearch } from './HeaderSearch';
import { HeaderCity } from './HeaderCity';
import Image from 'next/image';
import { HeaderDropdown } from './HeaderDropdown';

interface IHeader {
}

export const Header: FC<IHeader> = (props) => {

  //Renders
  return (
    <header className='bg-primary flex pt-6 flex-col'>
      <div className='mx-auto container flex items-center max-w-7xl pb-6'>
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
      <div className='bg-secondary py-3 flex'>
        <div className='max-w-7xl container mx-auto flex justify-between'>
          <div className='flex gap-20'>
            <HeaderDropdown/>
            <HeaderDropdown/>
            <HeaderDropdown/>
            <HeaderDropdown/>
            <HeaderDropdown/>
            <HeaderDropdown/>
          </div>

          <a href='tel:83452123456' className='text-xl text-white'>+7(3452)123-456</a>
        </div>
      </div>
    </header>
  );
};