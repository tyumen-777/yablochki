import React, { FC } from 'react';

interface IMain {}

export const MainScreen:FC<IMain> = (props) => {

 //Renders
 return (
   <div>

     <h1 className='text-3xl'>
       Hello World
     </h1>
   </div>

 );
};