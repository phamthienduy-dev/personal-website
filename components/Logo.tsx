import React, { FC } from 'react';

type Props = {
  className?: string;
  onClick?: () => void;
};

export const Logo: FC<Props> = ({ className, onClick }) => {
  return (
    <div className={`cursor-pointer ${className}`} onClick={() => onClick}>
      <span className="text-primary-200">DUY</span>
      <span className="text-secondary-200">FE</span>
    </div>
  );
};
