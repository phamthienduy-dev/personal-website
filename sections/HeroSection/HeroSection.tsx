import React from 'react';

import { PrimaryButton, UnderlineText } from '@components';
import { useIntl } from 'react-intl';
import { ProfileImage } from '@static';
import Image from 'next/image';

export const HeroSection = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="container mb-16 px-8">
      <div className="grid grid-cols-2 grid-rows-1">
        <div className="flex flex-col justify-center py-48">
          <h1 className="mb-4 text-5xl">
            <span>{formatMessage({ defaultMessage: 'Phạm Thiên Duy' })}</span>
          </h1>
          <UnderlineText
            className="mb-8 text-5xl font-bold"
            underlineBackground="bg-secondary-100"
          >
            Frontend Developer
          </UnderlineText>
          <PrimaryButton>RESUME</PrimaryButton>
        </div>
        <div className="relative justify-end">
          <div className="absolute top-0 right-[64px]">
            <div className="relative">
              <Image
                src={ProfileImage.src}
                width={405}
                height={530}
                className="rounded-[64px]"
              />
            </div>
          </div>
          <div className="absolute right-0 top-10 -z-10 h-[530px] w-[405px] rounded-[64px] bg-primary" />
        </div>
      </div>
    </div>
  );
};
