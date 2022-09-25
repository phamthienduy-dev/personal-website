import React from 'react';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useIntl } from 'react-intl';

import { PrimaryButton } from '@/components';
import { HeroIllustration, HeroIllustrationDark } from '@/static';

export const HeroSectionContent = () => {
  const { formatMessage } = useIntl();
  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-2 grid-rows-1 p-32">
      <div className="flex flex-col justify-center">
        <h1 className="mb-4 text-6xl font-semibold">
          <span className="text-primary-200">
            {formatMessage({ defaultMessage: 'Phạm ' })}
          </span>{' '}
          <span className="text-secondary-200">
            {formatMessage({ defaultMessage: 'Thiên ' })}
          </span>{' '}
          <span className="text-primary-200">
            {formatMessage({ defaultMessage: 'Duy ' })}
          </span>
        </h1>
        <h2 className="mb-8 text-xl">Frontend Developer</h2>
        <PrimaryButton className="w-fit">
          {formatMessage({ defaultMessage: 'Liên hệ' })}
        </PrimaryButton>
      </div>
      <div>
        {theme === 'light' ? (
          <Image src={HeroIllustration.src} width={565} height={410} />
        ) : (
          <Image src={HeroIllustrationDark.src} width={565} height={410} />
        )}
      </div>
    </div>
  );
};
