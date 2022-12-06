import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="scrollbar bg-white transition duration-300 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
