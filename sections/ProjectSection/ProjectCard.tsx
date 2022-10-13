import Image from 'next/image';
import React from 'react';

import { OmifoodApp } from '@/static';

export const ProjectCard = () => {
  return (
    <div className="flex rounded-xl border-4 border-solid border-gray-600 p-4 transition duration-300 hover:shadow-xl">
      <Image
        src={OmifoodApp.src}
        layout="fixed"
        width={280}
        height={250}
        objectFit="cover"
        className="rounded-lg"
      />
      <div></div>
    </div>
  );
};
