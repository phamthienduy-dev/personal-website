import React from 'react';

import { useTheme } from 'next-themes';
import { useIntl } from 'react-intl';

import { Logo, NavLink, PrimaryButton } from '@/components';

export const NavBar = () => {
  const { formatMessage } = useIntl();
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    }

    if (theme === 'dark') {
      setTheme('light');
    }
  };

  // const language = {
  //   en: 'English',
  //   vi: 'Tiếng Việt',
  // };

  return (
    <nav className="mb-32 rounded-t-2xl">
      <div className="flex items-center justify-between text-gray-500">
        <div className="flex justify-self-start text-4xl font-extrabold ">
          <Logo />
        </div>
        <div className="flex items-center gap-16">
          <NavLink>{formatMessage({ defaultMessage: 'Giới thiệu' })}</NavLink>
          <NavLink>{formatMessage({ defaultMessage: 'Dự án' })}</NavLink>
          <NavLink>Language</NavLink>
          <NavLink onClick={handleChangeTheme}>
            {formatMessage({ defaultMessage: 'Mode' })}
          </NavLink>
          <PrimaryButton>Resume</PrimaryButton>
        </div>
      </div>
    </nav>
  );
};
