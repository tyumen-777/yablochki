import React, { FC } from 'react';
import { ProductCard } from '../../components/ProductCard';
import Slider, { Settings } from 'react-slick';

interface IMainHits {
}

export const MainHits: FC<IMainHits> = (props) => {
  const sliderSetting: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  //Renders
  return (
    <div className='flex flex-col mb-20 slider max-w-5xl'>
      <h2 className='text-3xl mb-4'>Хиты продаж</h2>
      <Slider {...sliderSetting}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </Slider>
    </div>
  );
};