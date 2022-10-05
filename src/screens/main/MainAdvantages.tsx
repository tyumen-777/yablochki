import React, { FC } from 'react';
import Image from 'next/image';

interface IMainAdvantages {
}

export const MainAdvantages: FC<IMainAdvantages> = (props) => {

  //Renders
  return (
    <div className='bg-white w-full'>
      <div className='max-w-5xl container mx-auto flex flex-col py-20'>
        <p className='text-3xl mb-20'>Наши преимущества</p>
        <div className='flex gap-6'>
          <div className='flex flex-col gap-4 w-72 items-start'>
            <Image src='/assets/icons/delivery.svg' width={30} height={30} alt='advantage' />
            <h2 className='text-xl font-bold'>Быстрая доставка</h2>
            <p className='text-secondary'>Бесплатная доставка
              по Тюмени</p>
          </div>
          <div className='flex flex-col gap-4 w-72 items-start'>
            <Image src='/assets/icons/original.svg' width={30} height={30} alt='advantage' />
            <h2 className='text-xl font-bold'>Оригинальная продукция</h2>
            <p className='text-secondary'>Продукция
              в нашем магазине полностью оригинальная</p>
          </div>
          <div className='flex flex-col gap-4 w-72 items-start'>
            <Image src='/assets/icons/warranty.svg' width={30} height={30} alt='advantage' />
            <h2 className='text-xl font-bold'>Гарантия на товар</h2>
            <p className='text-secondary'>Официальная гарантия
              от Apple на новую технику</p>
          </div>
          <div className='flex flex-col gap-4 w-72 items-start'>
            <Image src='/assets/icons/lowprice.svg' width={30} height={30} alt='advantage' />
            <h2 className='text-xl font-bold'>Низкая цена</h2>
            <p className='text-secondary'>У нас самые низкие
              цены в городе</p>
          </div>
        </div>
      </div>

    </div>
  );
};