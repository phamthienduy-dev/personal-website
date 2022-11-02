import React from 'react';
import { useIntl } from 'react-intl';

import {
  SiHtml5 as HTML,
  SiCss3 as CSS,
  SiJavascript as JavaScript,
  SiReact as ReactLogo,
  SiNextdotjs as NextJS,
  SiTypescript as TypeScript,
} from 'react-icons/si';
import { OmnifoodApp, Nestle, LGCosmetics, forkify } from '@static';
import { ProjectCard } from './ProjectCard';

export const ProjectSection = () => {
  const { formatMessage } = useIntl();

  const cardContent = {
    omnifood: {
      imageSrc: OmnifoodApp.src,
      name: 'Omnifood',
      description: `${formatMessage({
        defaultMessage:
          'Landing page cho một dịch vụ ăn uống. Tập trung vào responsive và UI!',
      })}`,
      techs: [<HTML />, <CSS />, <JavaScript />],
    },
    nestle: {
      imageSrc: Nestle.src,
      name: 'Nestle',
      description: `${formatMessage({ defaultMessage: 'Nestle' })}`,
      techs: [<ReactLogo />, <NextJS />, <TypeScript />],
    },
    lg: {
      imageSrc: LGCosmetics.src,
      name: 'LGCosmetics',
      description: `${formatMessage({ defaultMessage: 'LGCosmetics' })}`,
      techs: [<ReactLogo />, <NextJS />, <TypeScript />],
    },
    forkify: {
      imageSrc: forkify.src,
      name: 'forkify',
      description: `${formatMessage({
        defaultMessage:
          'Bạn có thể tìm kiếm, thêm, bookmark các công thức nấu ăn bạn thích.',
      })}`,
      techs: [<HTML />, <CSS />, <JavaScript />],
    },
  };

  return (
    <section className="container bg-transparent  dark:bg-transparent">
      <div className="grid grid-cols-2 grid-rows-2 gap-8">
        <ProjectCard content={cardContent.omnifood} />
        <ProjectCard content={cardContent.lg} />
        <ProjectCard content={cardContent.nestle} />
        <ProjectCard content={cardContent.forkify} />
      </div>
    </section>
  );
};
