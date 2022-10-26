import React, { FC } from 'react';
import Image from 'next/image';

interface ICategoryCard {
  name: string,
  price: number
}

export const CategoryCard: FC<ICategoryCard> = (props) => {
  const {name, price} = props
  //Renders
  return (
    <div className='max-w-md flex flex-col bg-white rounded-md shadow pt-4 items-center'>
      <h2 className='text-2xl'>{name}</h2>
      <p>от {price} ₽</p>
      <Image src='/assets/images/smalliphone.png' width={210} height='200' alt='iphone' objectFit='contain'/>
    </div>
  );
};