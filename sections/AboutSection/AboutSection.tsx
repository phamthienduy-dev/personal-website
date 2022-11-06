import { ComponentProps } from '@types';
import React, { FC } from 'react';
import { AboutInfo, AboutTech } from '@sections';

export const AboutSection: FC<ComponentProps> = () => {
  return (
    <div className="mb-[72px]">
      <AboutInfo />
      <AboutTech />
    </div>
  );
};
