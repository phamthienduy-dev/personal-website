import React, { FC } from 'react';

type Props = {
  onClick?: () => void;
};

export const Logo: FC<Props> = ({ onClick }) => {
  return (
    <div className="cursor-pointer " onClick={() => onClick}>
      <span>LOGO</span>
    </div>
  );
};
