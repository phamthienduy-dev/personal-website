import React from 'react';

import { motion } from 'framer-motion';

type Props = {
  onClick?: () => void;
  children?: React.ReactNode;
};

export const SecondaryButton = ({ children, onClick, ...props }: Props) => {
  return (
    <motion.button
      onClick={onClick}
      className="h-10 w-40 rounded-md bg-gray-100 text-sm font-semibold uppercase text-primary"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
