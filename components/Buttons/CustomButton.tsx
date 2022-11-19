import React from 'react';

import { motion } from 'framer-motion';

type Props = {
  onClick?: () => void;
  children?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
};

export const CustomButton = ({
  children,
  onClick,
  backgroundColor,
  textColor,
  ...props
}: Props) => {
  return (
    <motion.button
      onClick={onClick}
      className={`h-10 w-40 rounded-md ${
        backgroundColor ? `bg-[${backgroundColor}]` : 'bg-primary'
      } text-sm font-semibold uppercase ${
        textColor ? `text-[${textColor}]` : 'text-white'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
