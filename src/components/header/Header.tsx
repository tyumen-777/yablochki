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
    <header className='bg-black flex pt-2 flex-col'>
      <div className='mx-auto container flex items-center max-w-7xl pb-2 justify-between'>
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
        <div>
          <a href='tel:83452123456' className='text-white text-xl mr-6'>+7(3452)123-456</a>
          <HeaderCity />
        </div>

      </div>
      <div className='bg-background py-3 flex'>
        <div className='max-w-7xl container mx-auto flex justify-between items-center'>
          <div className='flex gap-20'>
            <p>@LOGO</p>
            <HeaderDropdown/>
            <HeaderDropdown/>
            <HeaderDropdown/>
            <HeaderDropdown/>
            <HeaderDropdown/>
            <HeaderDropdown/>
          </div>
          <HeaderSearch/>
        </div>
      </div>
    </header>
  );
};