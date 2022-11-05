import { UnderlineText } from '@components';
import Link from 'next/link';
import React from 'react';
import { useIntl } from 'react-intl';
import { AboutTechItem } from './AboutTechItem';

export const AboutTech = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="grid grid-cols-2 grid-rows-1">
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-3 grid-rows-2 gap-16">
          <AboutTechItem>React</AboutTechItem>
          <AboutTechItem>TypeScript</AboutTechItem>
          <AboutTechItem>NextJS</AboutTechItem>
          <AboutTechItem className="row-start-2">HTML5</AboutTechItem>
          <AboutTechItem className="row-start-2">CSS3</AboutTechItem>
          <AboutTechItem className="row-start-2">Git</AboutTechItem>
        </div>
        <div className="flex text-left">
          <Link href="/tools">{formatMessage({ defaultMessage: 'And many more' })}</Link>
        </div>
      </div>
      <div className="flex items-center justify-center rounded-[64px] bg-gray-50">
        <div>
          <span className="mb-4 block text-5xl font-semibold">Tech</span>
          <UnderlineText
            underlineBackground="bg-[#E5F0FF]"
            className="text-5xl font-bold"
          >
            Stack
          </UnderlineText>
        </div>
      </div>
    </div>
  );
};
