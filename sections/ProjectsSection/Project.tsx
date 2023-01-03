import Image from 'next/image';
import React, { FC } from 'react';
import { SecondaryButton } from '@components';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import classNames from 'classnames';

type Props = {
  name: string;
  description: string;
  href: string;
  imgSrc: string;
  imgPosition: 'left' | 'right';
};

export const Project: FC<Props> = ({ name, description, href, imgSrc, imgPosition }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-8 rounded-2xl ">
      <div
        className={classNames('row-start-1 flex w-full flex-col justify-center', {
          'col-start-2 text-left': imgPosition === 'left',
          'col-start-1 text-right': imgPosition === 'right',
        })}
      >
        <div
          className={classNames('row-start-1 flex w-2/3 flex-col justify-center', {
            'mr-auto': imgPosition === 'left',
            'ml-auto': imgPosition === 'right',
          })}
        >
          <h2 className="mb-4 text-3xl font-bold">{name}</h2>
          <p className="mb-4">{description}</p>
          <div
            className={classNames('flex w-full cursor-pointer items-center', {
              'justify-start': imgPosition === 'left',
              'justify-end': imgPosition === 'right',
            })}
          >
            <Link href={href}>
              <SecondaryButton>
                {formatMessage({ defaultMessage: 'Details' })}
              </SecondaryButton>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={classNames(' rounded-xl bg-gray-50 p-2 dark:bg-[#303030]', {
          'col-start-1': imgPosition === 'left',
          'col-start-2': imgPosition === 'right',
        })}
      >
        <Image className="rounded-xl" src={imgSrc} width={1600} height={900} alt={name} />
      </div>
    </div>
  );
};
