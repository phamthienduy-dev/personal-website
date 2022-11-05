import { ComponentProps } from '@types';
import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

export const AboutTechItem: FC<Props & ComponentProps> = ({ children, className }) => {
  return (
    <div className={`${className || null} flex items-center`}>
      <div className="mr-2 h-2 w-2 rounded-full bg-primary" />
      <div className="text-2xl">{children}</div>
    </div>
  );
};
