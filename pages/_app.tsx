/* eslint-disable react/jsx-no-constructed-context-values */
import '../styles/globals.css';

import React, { useMemo, createContext, useState } from 'react';

import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import { Layout } from '@components';
import English from '../content/locales/en.json';
import Vietnamese from '../content/locales/vi.json';

interface UIContextInterface {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UICtx = createContext<UIContextInterface | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split('-') : ['vi'];

  const messages = useMemo(() => {
    switch (shortLocale) {
      case 'vi':
        return Vietnamese;
      case 'en':
        return English;
      default:
        return English;
    }
  }, [shortLocale]);

  return (
    <IntlProvider locale={shortLocale} messages={messages} onError={() => null}>
      <ThemeProvider attribute="class" enableSystem={false}>
        <UICtx.Provider value={{ isMenuOpen, setIsMenuOpen }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UICtx.Provider>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default MyApp;
