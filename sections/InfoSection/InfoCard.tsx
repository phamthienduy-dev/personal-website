/* eslint-disable tailwindcss/no-custom-classname */
import React, { FC } from 'react';

import Image from 'next/image';
import { useIntl } from 'react-intl';

import { ProfileImage } from '@static';
import { BlueText, PurpleText, SecondaryButton } from '@components';
import { ComponentProps } from '@types';

export const InfoCard: FC<ComponentProps> = ({ className }) => {
  const { formatMessage } = useIntl();

  return (
    <div className={`rounded-2xl p-4 dark:bg-gray-900 ${className}`}>
      <div className="mb-4">
        <Image src={ProfileImage.src} width={410} height={390} />
      </div>
      <div className="mb-4 text-center text-xl font-semibold">
        <p>
          {formatMessage({ defaultMessage: 'Xin chào! Mình là' })}{' '}
          <BlueText>{formatMessage({ defaultMessage: 'Duy' })}</BlueText>
        </p>
        <p className="mt-1">
          {formatMessage({ defaultMessage: 'Đến từ' })}{' '}
          <BlueText>{formatMessage({ defaultMessage: 'Vũng Tàu' })}</BlueText>,{' '}
          <PurpleText>{formatMessage({ defaultMessage: 'Việt Nam.' })}</PurpleText>
        </p>
      </div>
      <div className="relative mb-8 p-8">
        <span className="absolute top-0 left-0 text-6xl">&quot;</span>
        <span className="absolute bottom-0 right-0 text-6xl">&quot;</span>
        <p className="text-justify text-xl font-semibold">
          {formatMessage({ defaultMessage: 'Mình cực thích' })}{' '}
          <BlueText>{formatMessage({ defaultMessage: 'thiết kế' })} </BlueText>
          {formatMessage({ defaultMessage: 'và' })}{' '}
          <span className="text-secondary-100">
            {formatMessage({ defaultMessage: 'lập trình' })}{' '}
          </span>
          {formatMessage({
            defaultMessage: 'những trang web trực quan, thân thiện với người dùng.',
          })}
        </p>
      </div>
      <div className="flex justify-end">
        <SecondaryButton className="justify-self-end">RESUME</SecondaryButton>
      </div>
    </div>
  );
};
