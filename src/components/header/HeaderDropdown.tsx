import React, { FC } from 'react';

interface IHeaderDropdown {
}

export const HeaderDropdown: FC<IHeaderDropdown> = (props) => {

  //Renders
  return (
    <div className='dropdown dropdown-hover'>
      <label tabIndex={0} className='text-black text-xl flex gap-2'>iPhone</label>
      <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
        <li><a>iPhone 14 Pro Max</a></li>
        <li><a>iPhone 14 Pro Max</a></li>
        <li><a>iPhone 14 Pro</a></li>
        <li><a>iPhone 13 Pro Max</a></li>
        <li><a>iPhone 13 Pro</a></li>
      </ul>
    </div>
  );
};