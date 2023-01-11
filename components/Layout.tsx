import { FC, ReactNode } from 'react';
import { Footer } from 'sections/Footer';
import { useUICtx } from '@hooks';
import classNames from 'classnames';
import { NavBar } from './NavBar';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const UIContext = useUICtx();

  return (
    <div className="relative font-body text-primary duration-300  dark:text-white">
      <div
        className={classNames(
          'absolute top-0 left-0 z-10 h-screen w-screen bg-white/30 backdrop-blur-sm',
          { hidden: !UIContext?.isMenuOpen },
        )}
        // eslint-disable-next-line react/jsx-closing-tag-location
      ></div>
      <div
        className={classNames('container overflow-x-hidden', {
          'h-screen overflow-y-hidden': UIContext?.isMenuOpen,
        })}
      >
        <NavBar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};
