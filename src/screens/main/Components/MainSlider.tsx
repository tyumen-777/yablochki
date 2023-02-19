import React from 'react'
import Slider, { Settings, CustomArrowProps } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import bannerPic from 'public/iPhone.png'
import { LeftArrow, RightArrow } from '@/src/components/Arrows';

const MainSlider = () => {


    //Renders
    const PrevArrow = (props: CustomArrowProps) => {
        const { onClick, className } = props
        return <div onClick={onClick} className={className} ><LeftArrow /></div>
    }
    const NextArrow = (props: CustomArrowProps) => {
        const { onClick, className } = props
        return <div onClick={onClick} className={className}><RightArrow /> </div>
    }

    const settings: Settings = {
        dots: true,
        infinite: true,
        // autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 5000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    }
    return (
        <Slider {...settings}>
            <div className='mx-auto !flex justify-center'>
                <Image src={bannerPic} alt='iPhone' className='rounded-2xl' />
            </div>
            <div className='mx-auto !flex justify-center'>
                <Image src={bannerPic} alt='iPhone' className='rounded-2xl' />
            </div>
        </Slider>
    )
}

export default MainSlider