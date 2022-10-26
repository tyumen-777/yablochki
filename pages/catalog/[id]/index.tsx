import React, { FC } from 'react';
import { SEO } from '../../../src/components/SEO';
import { CategoryItemScreen } from '../../../src/screens/catalog/CategoryItemScreen';

interface ICategoryItem {}

const CategoryItem:FC<ICategoryItem> = (props) => {

 //Renders
 return (
  <>
   <SEO title=''/>
    <CategoryItemScreen/>
  </>
 );
};

export default CategoryItem