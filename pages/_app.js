import Head from 'next/head';
import '../styles/globals.css';

import ScoutThemeProvider from '../utils/ScoutThemeProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ScoutThemeProvider>
      <Head>
        <title>Scout - Next Generation Anime Database</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta 
          name="title" 
          content="Scout - Next Generation Anime Database" 
        />
        <meta 
          name="description" 
          content="scout description go here" 
        />
      </Head>
      <Component {...pageProps} />
    </ScoutThemeProvider>
  )
}

export default MyApp
