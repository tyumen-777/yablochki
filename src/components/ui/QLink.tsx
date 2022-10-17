import React, { PropsWithChildren, ReactElement } from 'react';
import Link from 'next/link';

interface IQLink {
  linkClassName?: string,
  href: string
}

export const QLink = (props: PropsWithChildren<IQLink>) : ReactElement => {
  const {linkClassName, children,href, ...rest} = props;

  //Renders
  return (
    <Link href={href} {...rest}>
      <a className=''>{children}</a>
    </Link>
  );
};