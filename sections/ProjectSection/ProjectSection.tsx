import React from 'react';
import { ProjectCard } from './ProjectCard';

export const ProjectSection = () => {
  return (
    <section className="container bg-transparent  dark:bg-transparent">
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div>
          <ProjectCard />
        </div>
        <div>
          <ProjectCard />
        </div>
        <div>
          <ProjectCard />
        </div>
        <div>
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};
