import { ComponentProps } from '@types';
import classNames from 'classnames';
import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
  underlineBackground?: string;
  darkUnderlineBackground?: string;
};

export const UnderlineText: FC<Props & ComponentProps> = ({
  children,
  className,
  underlineBackground,
  darkUnderlineBackground,
}) => {
  return (
    <div className={classNames('w-fit', { [`${className}`]: className })}>
      <span className="w-fit">
        <span>{children}</span>
        <div
          className={classNames('-mt-4 h-5', {
            [`${underlineBackground}`]: underlineBackground,
            [`${darkUnderlineBackground}`]: darkUnderlineBackground,
          })}
        />
      </span>
    </div>
  );
};
