import React from 'react';
import { Hera, LG } from '@static';
import { Project } from './Project';

export const ProjectsSection = () => {
  return (
    <div className="mb-20 flex flex-col gap-8">
      <Project
        name="LG Cosmetic"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sodales facilisis
          cras cursus iaculis. Cursus nibh fusce nunc elit. Donec morbi etiam euismod
          mollis."
        href="/projects/lg"
        imgSrc={LG.src}
        imgPosition="left"
      />
      <Project
        name="Hera Admin"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sodales facilisis
          cras cursus iaculis. Cursus nibh fusce nunc elit. Donec morbi etiam euismod
          mollis."
        href="/projects/hera"
        imgSrc={Hera.src}
        imgPosition="right"
      />
    </div>
  );
};
