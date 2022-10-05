import React, { FC } from 'react';
import Slider, { Settings } from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IMainSlider {
}

export const MainSlider: FC<IMainSlider> = (props) => {

  const sliderSetting: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //Renders
  return (
    <div className='slider max-w-5xl'>
     <Slider {...sliderSetting} >
      <Image src='/assets/images/iPhone.png' width={1200} height={600} alt='main slider' className='rounded-md'/>
      <Image src='/assets/images/iPhone.png' width={1200} height={600} alt='main slider' />
     </Slider>
    </div>

  );
};