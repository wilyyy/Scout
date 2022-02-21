import styled from 'styled-components';
import Router from 'next/router';

import { useTheme } from '../utils/ScoutThemeProvider';
import MainContentSlider from '../components/MainContentSlider';
import NavigationBar from '../components/NavigationBar';

import ax from 'axios';
import { useState } from 'react';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Home = () => {
  return (
    <Page>
      <NavigationBar />
      <MainContentSlider />

      {/* 🐳🐳🐳🐳🐳🐳 willy stuff for merge delete or take stuff from later? 🐳🐳🐳🐳🐳🐳 */}
      
      
      {/* 🐳🐳🐳🐳🐳🐳 willy stuff end🐳🐳🐳🐳🐳🐳 */}
    </Page>
  )
}

export default Home;
