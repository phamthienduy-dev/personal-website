import { useUICtx } from '@hooks';
import classNames from 'classnames';
import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  const UIContext = useUICtx();

  return (
    <Html>
      <Head />
      <body
        className={classNames(
          'scrollbar bg-white transition duration-300 dark:bg-black',
          { 'overflow-y-hidden': UIContext?.isMenuOpen },
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
