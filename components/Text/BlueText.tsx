import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

export const BlueText: FC<Props> = ({ children }) => {
  return <span className="text-primary-100">{children}</span>;
};
