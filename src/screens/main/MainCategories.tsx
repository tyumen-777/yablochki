import React, { FC } from 'react';
import { CategoryCard } from '../../components/CategoryCard';

interface IMainCategories {
}

export const MainCategories: FC<IMainCategories> = (props) => {

  //Renders
  return (
    <div className='grid grid-rows-2 grid-cols-4 gap-10 my-10 max-w-5xl'>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  );
};