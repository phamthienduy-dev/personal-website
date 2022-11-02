import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

export const SectionPrimaryHeading: FC<Props> = ({ children }) => {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-5xl font-extrabold">{children}</h1>
    </div>
  );
};
