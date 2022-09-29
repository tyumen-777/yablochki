import React, { FC } from 'react';
import { Header } from './header/Header';
import { Footer } from './Footer';

interface IBaseLayout {
  children: any
}

export const BaseLayout: React.FC<IBaseLayout> = props => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
