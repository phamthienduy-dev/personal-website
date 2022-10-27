/* eslint-disable tailwindcss/no-custom-classname */
import { NavBar } from '@components';
import { HeroSection } from '@sections';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pham Thien Duy: Frontend Developer</title>
        <meta name="description" content="Welcome to my personal website" />
        <link rel="icon" href="/static/images/favicon.ico" />
      </Head>
      <div className="container relative h-screen  overflow-hidden font-body text-primary">
        <NavBar className="mb-8" />
        <HeroSection />
      </div>
    </>
  );
};

export default Home;
