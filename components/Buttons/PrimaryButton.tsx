import React from 'react';

import { motion } from 'framer-motion';

type Props = {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
};

export const PrimaryButton = ({ children, onClick, className, ...props }: Props) => {
  return (
    <motion.button
      onClick={onClick}
      className={`text-whiten rounded-md bg-gradient-to-r from-secondary-200 to-primary-200 py-4 px-8 text-sm font-semibold uppercase text-white ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
