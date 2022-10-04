import React, { FC } from 'react';

import { ComponentProps } from 'types/types';

type Props = {
  children: React.ReactNode;
};

const InfoTechsItem: FC<Props & ComponentProps> = ({ children, className }) => {
  return <div className={` ${className}`}>{children}</div>;
};

export default InfoTechsItem;
