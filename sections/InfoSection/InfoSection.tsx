import React from 'react';

import { SectionBox } from '@components';

import { InfoCard } from './InfoCard';
import { InfoTechs } from './InfoTechs/InfoTechs';

export const InfoSection = () => {
  return (
    <SectionBox className="mb-16">
      <div className="grid  grid-cols-12 grid-rows-1 gap-4">
        <InfoCard className="col-span-3" />
        <InfoTechs className="col-span-9" />
      </div>
    </SectionBox>
  );
};
