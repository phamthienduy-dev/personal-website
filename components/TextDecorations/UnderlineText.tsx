import { ComponentProps } from '@types';
import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

export const UnderlineText: FC<Props & ComponentProps> = ({ children, className }) => {
  return (
    <div className={`${className}`}>
      <span className="relative">
        {children}
        <div className="absolute h-4 w-full -translate-y-1/2 bg-red-300"></div>
      </span>
    </div>
  );
};
