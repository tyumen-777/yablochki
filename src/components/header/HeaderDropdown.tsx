import React, { FC } from 'react';
import Image from 'next/image';

interface IHeaderDropdown {}

export const HeaderDropdown:FC<IHeaderDropdown> = (props) => {

 //Renders
 return (
   <div className='dropdown dropdown-hover'>
     <label tabIndex={0} className='text-white text-xl flex gap-2'>iPhone
       <Image src='/assets/icons/down.svg' width={12} height={12} alt='down arrow' />
     </label>
     <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
       <li><a>iPhone 14 Pro Max</a></li>
       <li><a>iPhone 14 Pro</a></li>
       <li><a>iPhone 13 Pro Max</a></li>
       <li><a>iPhone 13 Pro</a></li>
     </ul>
   </div>
 );
};