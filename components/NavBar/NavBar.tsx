import React, { useEffect, useState } from 'react';

import { Logo, NavMenu } from '@components';
import { motion } from 'framer-motion';
import Hamburger from 'hamburger-react';
import { useTheme } from 'next-themes';
import { BiMoon, BiSun } from 'react-icons/bi';

export const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
            <div className="cursor-pointer">
              {theme === 'light' ? (
                <BiMoon size={24} onClick={() => setTheme('dark')} />
              ) : (
                <BiSun size={24} onClick={() => setTheme('light')} />
              )}
            </div>
            <div className="z-50" onClick={handleToggleNavMenu}>
              <Hamburger
                toggled={isNavMenuOpened}
                toggle={() => handleToggleNavMenu}
                size={24}
              />
            </div>
          </div>
        </div>
        <motion.div
          animate={{ x: isNavMenuOpened ? 0 : '100%' }}
          className="absolute top-0 right-0 z-40 h-screen w-1/2 bg-white dark:bg-[#303030]"
          transition={{ duration: 0.3 }}
        >
          <NavMenu onMenuClose={() => setIsNavMenuOpened(false)} />
        </motion.div>
      </div>
    </div>
  );
};
