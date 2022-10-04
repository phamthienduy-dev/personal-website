import React, { FC } from 'react';

import { ComponentProps } from '@/types';

import InfoTechsItem from './InfoTechsItem';

export const InfoTechs: FC<ComponentProps> = ({ className }) => {
  return (
    <div className={`grid grid-cols-5 grid-rows-5 ${className}`}>
      <InfoTechsItem className="row-start-1">Tech</InfoTechsItem>
      <InfoTechsItem className="row-start-2">HTML</InfoTechsItem>
      <InfoTechsItem className="row-start-3">CSS</InfoTechsItem>
      <InfoTechsItem className="col-start-2 row-start-3">JS</InfoTechsItem>
      <InfoTechsItem className="col-start-2 row-start-4">React</InfoTechsItem>
      <InfoTechsItem className="col-start-3 row-start-4">NextJS</InfoTechsItem>
      <InfoTechsItem className="col-start-2 row-start-5">TypeScript</InfoTechsItem>
      <InfoTechsItem className="col-start-3 row-start-5">TailwindCss</InfoTechsItem>
      <InfoTechsItem className="col-start-4 row-start-5">MUI</InfoTechsItem>
      <InfoTechsItem className="col-start-5 row-start-5">Git</InfoTechsItem>
    </div>
  );
};
