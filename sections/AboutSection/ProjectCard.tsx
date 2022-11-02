import { PrimaryButton } from 'components/Buttons';
import Image from 'next/image';
import React, { FC, ReactNode } from 'react';
import { useIntl } from 'react-intl';

type Props = {
  content: {
    imageSrc: string;
    name: string;
    techs: ReactNode[];
    description: string;
    githubUrl?: string;
  };
};

export const ProjectCard: FC<Props> = ({ content }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="flex gap-4 rounded-xl border-4 border-solid border-gray-600 p-4 transition duration-300 hover:shadow-xl">
      <div className="leading-[0]">
        <Image
          src={content.imageSrc}
          layout="fixed"
          width={250}
          height={250}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="py-4">
        <h4 className="mb-2 text-3xl font-semibold text-gray-500 dark:text-gray-200">
          {content.name}
        </h4>
        <div className="flex gap-2">
          {content.techs.map((tech, index) => (
            <div className="rounded-sm bg-gray-600 p-1" key={index}>
              {tech}
            </div>
          ))}
        </div>
        <p className="mt-4 text-xl text-gray-500 dark:text-gray-200">
          {content.description}
        </p>
        <div className="mt-auto">
          <PrimaryButton>{formatMessage({ defaultMessage: 'Xem' })}</PrimaryButton>
        </div>
      </div>
    </div>
  );
};
