import React from 'react';

import { SectionBox } from '@/components';

import { InfoCard } from './InfoCard';
import { InfoTechs } from './InfoTechs';

export const InfoSection = () => {
  return (
    <SectionBox>
      <div>
        <InfoCard />
        <InfoTechs />
      </div>
    </SectionBox>
  );
};
