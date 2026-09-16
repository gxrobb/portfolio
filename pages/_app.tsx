import type { AppProps } from 'next/app';
import { Open_Sans } from 'next/font/google';
import '../styles/globals.scss';

// Self-hosted at build time; no request to Google Fonts from the browser.
const openSans = Open_Sans({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-open-sans: ${openSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
