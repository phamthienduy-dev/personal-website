import React, { FC } from 'react';

type Props = {
  className?: string;
  onClick?: () => void;
};

export const Logo: FC<Props> = ({ className, onClick }) => {
  return (
    <div className={`cursor-pointer ${className}`} onClick={() => onClick}>
      <span>LOGO</span>
    </div>
  );
};
