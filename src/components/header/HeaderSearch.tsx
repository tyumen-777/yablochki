import React, { FC } from 'react';
import Image from 'next/image';

interface IHeaderSearch {}

export const HeaderSearch:FC<IHeaderSearch> = (props) => {

 //Renders
 return (
   <div className='flex'>
    <Image src='/assets/icons/search.svg' alt='search icon' width={19} height={19}/>
    <input type='text' className='input w-full max-w-xs bg-transparent pl-3 focus:outline-none' placeholder='Поиск по сайту'/>
   </div>

 );
};