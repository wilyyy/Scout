import styled from 'styled-components';
import Router from 'next/router';
import { ThemeConfig } from '@/utils/ThemeConfig';
import { useTheme } from '@/utils/ScoutThemeProvider';

import NavigationBar from '@/components/NavigationBar';
import MainContentSlider from '@/components/MainContentSlider';
import SettingsModal from '@/components/SettingsModal';

import { IoMdFunnel } from 'react-icons/io';

import ax from 'axios';
import { useState } from 'react';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const BodyHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const HeaderText = styled.div`
  font-size: 24px;
`

const AnimeCardCont = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const Home = () => {

  const {theme} = useTheme();
  const [data, setData] = useState([]);

  return (
    <Page>
      <NavigationBar />

      {/* 🐳🐳🐳🐳🐳🐳 willy stuff for merge delete or take stuff from later? 🐳🐳🐳🐳🐳🐳 */}
      
      
      {/* 🐳🐳🐳🐳🐳🐳 willy stuff end🐳🐳🐳🐳🐳🐳 */}
      <MainContentSlider 
        titletext1='Demon Slayer' 
        desctext1='After a demon attack leaves his family slain and his sister cursed, Tanjiro embarks upon a perilious journey to find a cure and avenge those he’s lost.'
        bottext='Your most recently watched anime'
        curEp='7'
        totEp='12'
        />
      <BodyHeader>
        <HeaderText>Explore</HeaderText>
        <IoMdFunnel color={ThemeConfig[theme].text} size="32" />
      </BodyHeader>
      <AnimeCardCont>
        <SettingsModal tcolor={ThemeConfig[theme].cardHeader} />
      </AnimeCardCont>
    </Page>
  )
}

export default Home;
