import React, { FC } from 'react';

import { ComponentProps, HeadingProps } from '@types';

export const SectionPrimaryHeading: FC<HeadingProps & ComponentProps> = ({
  heading,
  subheading,
  className,
}) => {
  return (
    <div className={`mb-8 text-center ${className}`}>
      <h1 className="text-lg font-semibold text-gray-400 dark:text-gray-200">
        {heading}
      </h1>
      <span className="from-primary-200 bg-gradient-to-r to-secondary-200 bg-clip-text pb-3 text-7xl font-semibold text-transparent">
        {subheading}
      </span>
    </div>
  );
};
