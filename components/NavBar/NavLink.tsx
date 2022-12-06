import classNames from 'classnames';
import React, { FC } from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
};

export const NavLink: FC<Props> = ({ className, children, onClick, href }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={classNames(
        'cursor-pointer text-4xl transition duration-300 hover:text-gray-900 dark:hover:text-gray-200',
        { className: className },
      )}
    >
      {children}
    </a>
  );
};
