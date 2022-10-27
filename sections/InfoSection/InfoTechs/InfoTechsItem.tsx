import React, { FC } from 'react';
import { motion } from 'framer-motion';

import { ComponentProps } from '@types';

type Props = {
  children: React.ReactNode;
  disableHover?: boolean;
};

export const InfoTechsItem: FC<Props & ComponentProps> = ({
  children,
  className,
  disableHover,
}) => {
  return (
    <motion.div
      whileHover={{ scale: disableHover ? 1 : 1.05 }}
      className={`flex items-center justify-center rounded-xl bg-gray-100 text-center text-7xl text-gray-600 dark:bg-gray-900 dark:text-gray-200  ${className}`}
    >
      {children}
    </motion.div>
  );
};
