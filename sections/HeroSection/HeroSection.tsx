/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

import { NavBar, SectionBox } from '@/components';

import { HeroSectionContent } from './HeroSectionContent';

export const HeroSection = () => {
  return (
    <SectionBox className="mb-4">
      <NavBar />
      <HeroSectionContent />
    </SectionBox>
  );
};
