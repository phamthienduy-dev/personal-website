import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

export const PurpleText: FC<Props> = ({ children }) => {
  return <span className="text-secondary-100">{children}</span>;
};
