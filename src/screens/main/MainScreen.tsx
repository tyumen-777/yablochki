import React, { FC } from 'react';
import { MainSlider } from './MainSlider';
import { MainCategories } from './MainCategories';
import { MainHits } from './MainHits';
import { MainAdvantages } from './MainAdvantages';

interface IMain {}

export const MainScreen:FC<IMain> = (props) => {

 //Renders
 return (
   <div className='mx-auto flex flex-col mt-6 items-center'>
     <MainSlider/>
     <MainCategories/>
     <MainHits/>
     <MainAdvantages/>
   </div>

 );
};