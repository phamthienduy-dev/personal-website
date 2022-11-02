import { ComponentProps } from '@types';
import React, { FC } from 'react';
import { AboutInfo } from './AboutInfo';

export const AboutSection: FC<ComponentProps> = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1">
      <div>
        <AboutInfo />
      </div>
      <div></div>
    </div>
  );
};
