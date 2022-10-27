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
      className={`rounded-md bg-primary py-4  px-8 text-sm font-semibold uppercase text-white ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
