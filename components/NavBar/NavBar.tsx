import React, { useState } from 'react';

import { useTheme } from 'next-themes';
import { Logo, NavLink, NavMenu } from '@components';
import { motion } from 'framer-motion';
import Hamburger from 'hamburger-react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);

  const handleChangeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    }

    if (theme === 'dark') {
      setTheme('light');
    }
  };

  const handleToggleNavMenu = () => {
    setIsNavMenuOpened((prevState) => !prevState);
  };

  return (
    <div className="mb-8">
      <div className="container px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex justify-self-start text-4xl font-extrabold ">
            <Logo />
          </div>
          <div className="flex items-center gap-4">
            <NavLink>
              <DarkModeSwitch
                onChange={handleChangeTheme}
                checked={theme === 'light'}
                moonColor="#454545"
                sunColor="#FFF"
              />
            </NavLink>
            <NavLink className="z-50" onClick={handleToggleNavMenu}>
              <Hamburger
                toggled={isNavMenuOpened}
                toggle={() => handleToggleNavMenu}
                size={24}
              />
            </NavLink>
          </div>
        </div>
        <motion.div
          animate={{ x: isNavMenuOpened ? 0 : '100%' }}
          className="absolute top-0 right-0 z-40 h-screen w-1/2 bg-white"
          transition={{ duration: 0.3 }}
        >
          <NavMenu onMenuClose={() => setIsNavMenuOpened(false)} />
        </motion.div>
      </div>
    </div>
  );
};
