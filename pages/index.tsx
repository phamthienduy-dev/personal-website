/* eslint-disable tailwindcss/no-custom-classname */
import type { NextPage } from 'next';
import Head from 'next/head';
import { useIntl } from 'react-intl';

import { SectionPrimaryHeading } from '@/components';
import { HeroSection, InfoSection } from '@/sections';

const Home: NextPage = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Head>
        <title>Pham Thien Duy: Frontend Developer</title>
        <meta name="description" content="Welcome to my personal website" />
        <link rel="icon" href="/static/images/favicon.ico" />
      </Head>
      <div className="font-railway background p-4  text-gray-400 dark:bg-gray-900 dark:text-gray-200">
        <HeroSection />
        <SectionPrimaryHeading
          heading={formatMessage({ defaultMessage: 'Giới thiệu' })}
          subheading={formatMessage({ defaultMessage: 'Đôi điều về mình' })}
        />
        <InfoSection />
        <SectionPrimaryHeading
          heading={formatMessage({ defaultMessage: 'Dự án' })}
          subheading={formatMessage({ defaultMessage: 'Mình làm được gì' })}
        />
      </div>
    </>
  );
};

export default Home;
