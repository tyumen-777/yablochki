import React, { FC } from 'react';
import { MainCategories } from '../main/MainCategories';

interface ICatalogScreen {}

export const CatalogScreen:FC<ICatalogScreen> = (props) => {

 //Renders
 return (
  <div className='mx-auto container flex max-w-7xl justify-center'>
   <MainCategories/>
  </div>
 );
};