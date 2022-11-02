import { ComponentProps } from '@types';
import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
  underlineColor?: string;
};

export const UnderlineText: FC<Props & ComponentProps> = ({
  children,
  className,
  underlineColor,
}) => {
  return (
    <div className={`${className}`}>
      <span className="relative">
        {children}
        <div className={`absolute -z-10 h-5 w-full -translate-y-1/2 ${underlineColor}`} />
      </span>
    </div>
  );
};
