import React, { FC } from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const NavLink: FC<Props> = ({ className, children }) => {
  return (
    <a
      className={`cursor-pointer hover:text-gray-900 transition duration=300 ${className}`}
    >
      {children}
    </a>
  );
};
