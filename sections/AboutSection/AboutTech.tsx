import { UnderlineText } from '@components';
import Link from 'next/link';
import React from 'react';
import { useIntl } from 'react-intl';
import { BsArrowRightShort } from 'react-icons/bs';
import { AboutTechItem } from './AboutTechItem';

export const AboutTech = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="grid grid-cols-2 grid-rows-1">
      <div className="flex flex-col items-center justify-center p-16">
        <div className="mb-14 grid grid-cols-3 grid-rows-2 gap-16">
          <AboutTechItem>React</AboutTechItem>
          <AboutTechItem>TypeScript</AboutTechItem>
          <AboutTechItem>NextJS</AboutTechItem>
          <AboutTechItem className="row-start-2">HTML5</AboutTechItem>
          <AboutTechItem className="row-start-2">CSS3</AboutTechItem>
          <AboutTechItem className="row-start-2">Git</AboutTechItem>
        </div>
        <div className="flex w-full items-center">
          <Link href="/tools">{formatMessage({ defaultMessage: 'And many more' })}</Link>
          <BsArrowRightShort width={14} height={14} />
        </div>
      </div>
      <div className="flex h-[490px] items-center justify-center rounded-[64px] bg-gray-50">
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
