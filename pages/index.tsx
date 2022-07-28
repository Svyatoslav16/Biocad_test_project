/** @jsxRuntime classic */
/** @jsx jsx */

import { Box } from '@mui/material';
import Head from 'next/head';
import { css, jsx } from '@emotion/react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Main } from '@/components/Main';

export const Home = () => {
  return (
    <Box css={divCSS}>
      <Head>
        <title>Test project for Biocad</title>
        <meta name="description" content="Test project for Biocad" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
      </Head>
      <Navigation />
      <main style={{ flex: 1 }}>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </Box>
  );
};

const divCSS = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fff;
  min-height: 100vh;
`;

export default Home;
