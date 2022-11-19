/* eslint-disable tailwindcss/no-custom-classname */
import { NavBar, SectionPrimaryHeading } from '@components';
import { AboutSection, CTASection, HeroSection, ProjectsSection } from '@sections';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useIntl } from 'react-intl';
import { Footer } from 'sections/Footer';

const Home: NextPage = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <Head>
        <title>Pham Thien Duy: Frontend Developer</title>
        <meta name="description" content="Welcome to my personal website" />
        <link rel="icon" href="/static/images/favicon.ico" />
      </Head>
      <div className="">
        <div className="container relative overflow-x-hidden font-body text-primary">
          <NavBar />
          <HeroSection />
          <SectionPrimaryHeading>
            {formatMessage({ defaultMessage: 'About me' })}
          </SectionPrimaryHeading>
          <AboutSection />
          <SectionPrimaryHeading>
            {formatMessage({ defaultMessage: 'Projects' })}
          </SectionPrimaryHeading>
          <ProjectsSection />
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
