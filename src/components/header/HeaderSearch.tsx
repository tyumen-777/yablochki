import React, { FC } from 'react';

interface IHeaderSearch {}

export const HeaderSearch:FC<IHeaderSearch> = (props) => {

 //Renders
 return (
   <input type='text' className='input w-full max-w-xs' placeholder='Поиск по сайту'/>
 );
};