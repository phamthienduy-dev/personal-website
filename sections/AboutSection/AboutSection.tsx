import { ComponentProps } from '@types';
import React, { FC } from 'react';
import { AboutInfo, AboutTech } from '@sections';

export const AboutSection: FC<ComponentProps> = () => {
  return (
    <>
      <AboutInfo />
      <AboutTech />
    </>
  );
};
