import React, { FC } from 'react';

import { PrimaryButton, UnderlineText } from '@components';
import { useIntl } from 'react-intl';
import { ComponentProps } from '@types';
import { ProfileImage } from '@static';
import Image from 'next/image';

export const HeroSection: FC<ComponentProps> = ({ className }) => {
  const { formatMessage } = useIntl();

  return (
    <div className={`container px-8 ${className}`}>
      <div className="grid grid-cols-2 grid-rows-1">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-5xl">
            <span>{formatMessage({ defaultMessage: 'Phạm Thiên Duy' })}</span>
          </h1>
          <UnderlineText className="mb-8 text-5xl font-bold">
            Frontend Developer
          </UnderlineText>
          <PrimaryButton className="w-fit">RESUME</PrimaryButton>
        </div>
        <div className="justify-self-end">
          <div className="relative">
            <Image src={ProfileImage.src} width={405} height={530} />
          </div>
        </div>
      </div>
    </div>
  );
};
