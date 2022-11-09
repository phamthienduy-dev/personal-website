import Image from 'next/image';
import React from 'react';
import { LGCosmetics } from '@static';
import { SecondaryButton, UnderlineText } from '@components';
import Link from 'next/link';
import { useIntl } from 'react-intl';

export const LGCosmeticsProject = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="mb-12 grid grid-cols-2 p-2">
      <Image src={LGCosmetics.src} width={600} height={400} />
      <div className="ml-auto flex w-2/3 flex-col justify-center">
        <UnderlineText
          className="mb-4 text-3xl font-bold"
          underlineBackground="bg-[#E2E3FE]"
        >
          LGCosmetics
        </UnderlineText>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sodales facilisis
          cras cursus iaculis. Cursus nibh fusce nunc elit. Donec morbi etiam euismod
          mollis.
        </p>
        <div className="flex w-full cursor-pointer items-center">
          <Link href="/projects/LGCosmetics">
            <SecondaryButton>
              {formatMessage({ defaultMessage: 'Details' })}
            </SecondaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
