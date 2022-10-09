import React, { FC } from 'react';

import {
  SiHtml5 as HTML,
  SiCss3 as CSS,
  SiJavascript as JavaScript,
  SiReact as ReactLogo,
  SiTailwindcss as TailwindCss,
  SiGit as Git,
  SiNextdotjs as NextJS,
  SiTypescript as TypeScript,
} from 'react-icons/si';
import { HiDotsHorizontal } from 'react-icons/hi';

import { ComponentProps } from '@/types';
import { InfoTechsItem } from './InfoTechsItem';

export const InfoTechs: FC<ComponentProps> = ({ className }) => {
  return (
    <div className={`grid grid-cols-5 grid-rows-5 gap-4 ${className}`}>
      <InfoTechsItem className="row-start-1" disableHover>
        {' '}
      </InfoTechsItem>
      <InfoTechsItem className="row-start-2">
        <HTML />
      </InfoTechsItem>
      <InfoTechsItem className="row-start-3">
        <CSS />
      </InfoTechsItem>
      <InfoTechsItem className="row-start-4" disableHover>
        {' '}
      </InfoTechsItem>
      <InfoTechsItem className="row-start-5" disableHover>
        {' '}
      </InfoTechsItem>
      <InfoTechsItem className="col-start-2 row-start-3">
        <JavaScript />
      </InfoTechsItem>
      <InfoTechsItem className="col-start-2 row-start-4">
        <ReactLogo />
      </InfoTechsItem>
      <InfoTechsItem className="col-start-3 row-start-4">
        <NextJS />
      </InfoTechsItem>
      <InfoTechsItem className="col-start-2 row-start-5">
        <TypeScript />
      </InfoTechsItem>
      <InfoTechsItem className="col-start-3 row-start-5">
        <TailwindCss />
      </InfoTechsItem>
      <InfoTechsItem className="col-start-4 row-start-5">
        <Git />
      </InfoTechsItem>
      <InfoTechsItem className="col-start-5 row-start-5">
        <HiDotsHorizontal />
      </InfoTechsItem>
    </div>
  );
};
