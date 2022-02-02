import Head from 'next/head';
import '../styles/globals.css';
import Link from "next/link";

import ScoutThemeProvider from '../utils/ScoutThemeProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ScoutThemeProvider>
      <Head>
        <title>Scout - Next Generation Anime Database</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta 
          name="title" 
          content="Scout - Next Generation Anime Database" 
        />
        <meta 
          name="description" 
          content="scout description go here" 
        />
        <link
            rel="preload"
            href="../public/fonts/Poppins-Regular.ttf"
            as="font"
            crossOrigin=""
        />
        <link
            rel="preload"
            href="../public/fonts/Poppins-ExtraLight.ttf"
            as="font"
            crossOrigin=""
        />
      </Head>
      <Component {...pageProps} />
    </ScoutThemeProvider>
  )
}

export default MyApp
