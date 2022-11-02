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
      className={`h-10 w-40 rounded-md bg-primary text-sm font-semibold uppercase text-white ${className}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      // transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
