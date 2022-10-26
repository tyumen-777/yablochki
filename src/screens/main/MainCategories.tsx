import React, { FC } from 'react';
import { CategoryCard } from '../../components/CategoryCard';
import { QLink } from '../../components/ui/QLink';
import { routes } from '../../config/routes';

interface IMainCategories {
}

export const MainCategories: FC<IMainCategories> = (props) => {

  //Renders
  return (
    <div className='grid grid-rows-2 grid-cols-4 gap-10 my-10 max-w-5xl'>
      <QLink href={`${routes.catalog}/iphone`}>
      <CategoryCard name='iPhone' price={32990} />
      </QLink>
      <QLink href={`${routes.catalog}/ipad`}>
      <CategoryCard name='iPad' price={32990} />
      </QLink>
      <QLink href={`${routes.catalog}/watch`}>
      <CategoryCard name='Watch' price={32990} />
      </QLink>
      <QLink href={`${routes.catalog}/imac`}>
      <CategoryCard name='iMac' price={32990} />
      </QLink>
      <QLink href={`${routes.catalog}/macbook`}>
      <CategoryCard name='MacBook' price={32990} />
      </QLink>
      <QLink href={`${routes.catalog}/accessories`}>
      <CategoryCard name='Аксессуары' price={32990} />
      </QLink>
      <QLink href={`${routes.catalog}/airpods`}>
      <CategoryCard name='AirPods' price={32990} />
      </QLink>
      <QLink href={`${routes.catalog}/homepod`}>
      <CategoryCard name='HomePod' price={32990} />
      </QLink>
    </div>
  );
};