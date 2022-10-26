import React, { FC } from 'react';
import { SEO } from '../../src/components/SEO';
import { CatalogScreen } from '../../src/screens/catalog/CatalogScreen';

interface ICatalog {
}

const Catalog: FC<ICatalog> = (props) => {

  //Renders
  return (
    <>
      <SEO title='catalog' />
      <CatalogScreen />
    </>
  );
};

export default Catalog;