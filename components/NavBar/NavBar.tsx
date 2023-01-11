import React, { useEffect, useState } from 'react';

import { Logo, NavMenu } from '@components';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import { MdOutlineLightMode, MdDarkMode, MdMenu, MdClose } from 'react-icons/md';
import { useUICtx } from '@hooks';
import classNames from 'classnames';

export const NavBar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isNavMenuOpened, setIsNavMenuOpened] = useState(false);
  const UIContext = useUICtx();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleToggleNavMenu = () => UIContext?.setIsMenuOpen((prevState) => !prevState);

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
                <MdDarkMode size={26} onClick={() => setTheme('dark')} />
              ) : (
                <MdOutlineLightMode size={26} onClick={() => setTheme('light')} />
              )}
            </div>
            <div className="z-50 cursor-pointer" onClick={handleToggleNavMenu}>
              {isNavMenuOpened ? <MdClose size={26} /> : <MdMenu size={26} />}
            </div>
          </div>
        </div>
        <motion.div
          animate={{ x: UIContext?.isMenuOpen ? 0 : '100%' }}
          className={classNames(
            'absolute top-0 right-0 z-40 h-full w-1/2 bg-white dark:bg-black',
            // { hidden: !UIContext?.isMenuOpen },
          )}
          transition={{ duration: 0.3 }}
        >
          <NavMenu onMenuClose={() => setIsNavMenuOpened(false)} />
        </motion.div>
      </div>
    </div>
  );
};
