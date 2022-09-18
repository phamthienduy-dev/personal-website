import React from 'react';

import { useIntl } from 'react-intl';

import { Logo, NavLink } from '@/components';

export const NavBar = () => {
  const { formatMessage } = useIntl();

  return (
    <div>
      <div className="container">
        <div className="flex justify-between text-gray-500">
          <div className="flex text-4xl font-extrabold justify-self-start">
            <Logo />
          </div>
          <nav>
            <NavLink>{formatMessage({ defaultMessage: 'Giới thiệu' })}SSSS</NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};
