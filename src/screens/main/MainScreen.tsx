import React, { FC } from 'react';
import { MainSlider } from './MainSlider';
import { MainCategories } from './MainCategories';
import { MainHits } from './MainHits';

interface IMain {}

export const MainScreen:FC<IMain> = (props) => {

 //Renders
 return (
   <div className='max-w-5xl mx-auto flex flex-col mt-6'>
     <MainSlider/>
     <MainCategories/>
     <MainHits/>
   </div>

 );
};