import '../styles/globals.css';

import { useMemo } from 'react';

import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import { Layout } from '@components';
import English from '../content/locales/en.json';
import Vietnamese from '../content/locales/vi.json';

function MyApp({ Component, pageProps }: AppProps) {
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </IntlProvider>
  );
}

export default MyApp;
