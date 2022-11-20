import { FC, ReactNode } from 'react';
import { Footer } from 'sections/Footer';
import { NavBar } from './NavBar';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="container relative overflow-x-hidden font-body text-primary duration-300  dark:text-white">
      <NavBar />
      <main> {children}</main>
      <Footer />
    </div>
  );
};
