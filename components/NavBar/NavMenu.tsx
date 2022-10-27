import React, { FC } from 'react';
import { NavLink } from './NavLink';

type Props = {
  onMenuClose: () => void;
};

export const NavMenu: FC<Props> = ({ onMenuClose }) => {
  return (
    <div className="flex h-full flex-col justify-center gap-4 text-center">
      <NavLink onClick={onMenuClose}>Home</NavLink>
      <NavLink onClick={onMenuClose}>About</NavLink>
      <NavLink onClick={onMenuClose}>Projects</NavLink>
      <NavLink onClick={onMenuClose}>Contact</NavLink>
    </div>
  );
};
