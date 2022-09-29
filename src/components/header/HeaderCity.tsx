import React, { FC } from 'react';

interface IHeaderCity {}

export const HeaderCity:FC<IHeaderCity> = (props) => {

 //Renders
 return (
  <select className='select select-ghost'>
   <option value=''>Тюмень</option>
   <option value=''>Екатеринбург</option>
  </select>
 );
};