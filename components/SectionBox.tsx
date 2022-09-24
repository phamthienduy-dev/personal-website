import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const SectionBox = ({ children, className }: Props) => {
  return (
    <section
      className={`${className} container rounded-2xl bg-white py-4 px-5 dark:bg-gray-800`}
    >
      {children}
    </section>
  );
};
