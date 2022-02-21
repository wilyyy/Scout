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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@100;200;400;600&display=swap" rel="stylesheet" /> 
      </Head>
      <Component {...pageProps} />
    </ScoutThemeProvider>
  )
}

export default MyApp
