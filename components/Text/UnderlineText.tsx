import { ComponentProps } from '@types';
import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
  underlineBackground?: string;
};

export const UnderlineText: FC<Props & ComponentProps> = ({
  children,
  className,
  underlineBackground,
}) => {
  return (
    <div className={`${className || null} w-fit `}>
      <span className="w-fit">
        <span>{children}</span>
        <div className={`-mt-4 h-5 ${underlineBackground || 'bg-primary'}`} />
      </span>
    </div>
  );
};
