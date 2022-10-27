import React, { FC, useState } from 'react';

import { useTheme } from 'next-themes';
import { IoMoon } from 'react-icons/io5';
import { Logo, NavLink, NavMenu } from '@components';
import { ComponentProps } from '@types';
import { motion } from 'framer-motion';
import Hamburger from 'hamburger-react';

export const NavBar: FC<ComponentProps> = ({ className }) => {
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

  const variants = {
    open: { x: '100%' },
    closed: { x: 0 },
  };

  return (
    <div className={className}>
      <div className="container px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex justify-self-start text-4xl font-extrabold ">
            <Logo />
          </div>
          <div className="flex items-center gap-4">
            <NavLink onClick={handleChangeTheme}>
              <IoMoon className="h-6 w-6" />
            </NavLink>
            <NavLink className="z-50" onClick={handleToggleNavMenu}>
              <Hamburger
                toggled={!isNavMenuOpened}
                toggle={() => handleToggleNavMenu}
                size={24}
              />
            </NavLink>
          </div>
        </div>
        <motion.div
          animate={{ x: isNavMenuOpened ? '100%' : 0 }}
          variants={variants}
          className="absolute top-0 right-0 z-40 h-screen w-1/2 bg-white"
          transition={{ duration: 0.3 }}
        >
          <NavMenu onMenuClose={() => setIsNavMenuOpened(true)} />
        </motion.div>
      </div>
    </div>
  );
};
