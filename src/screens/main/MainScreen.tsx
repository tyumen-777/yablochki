import React, { FC } from 'react';
import { MainSlider } from './MainSlider';

interface IMain {}

export const MainScreen:FC<IMain> = (props) => {

 //Renders
 return (
   <div className='max-w-3xl mx-auto flex flex-col mt-6'>
     <MainSlider/>
   </div>

 );
};