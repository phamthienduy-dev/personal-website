import React, { FC } from 'react';
import { NavLink } from './NavLink';

type Props = {
  onMenuClose: () => void;
};

export const NavMenu: FC<Props> = ({ onMenuClose }) => {
  return (
    <div className="flex h-screen flex-col justify-start gap-4 p-32 text-left">
      <NavLink onClick={onMenuClose}>Home</NavLink>
      <NavLink onClick={onMenuClose}>About</NavLink>
      <NavLink onClick={onMenuClose}>Projects</NavLink>
      <NavLink onClick={onMenuClose}>Contact</NavLink>
    </div>
  );
};
