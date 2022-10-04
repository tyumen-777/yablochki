import React, { FC } from 'react';
import Image from 'next/image';

interface IProductCard {
}

export const ProductCard: FC<IProductCard> = (props) => {

  //Renders
  return (
    <div className='flex flex-col bg-white max-w-xs p-6 rounded-md shadow'>
      <Image src='/assets/images/smalliphone.png' alt='iphone image' width={220} height={280} objectFit='contain' />
      <p className='text-primary mt-6 mb-2'>В наличии</p>
      <p className='text-xl'>Apple iPhone 14 Pro Max eSIM 512 ГБ, темно-фиолетовый</p>
      <div className='flex mt-4 justify-between'>
        <p className='font-bold text-2xl'>100 000 ₽ </p>
        <Image src='/assets/icons/Cart.svg' alt='cart icon' width={32} height={32} />
      </div>
    </div>
  );
};