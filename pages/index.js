import styled from 'styled-components';
import {Router, useRouter} from 'next/router';
import { ThemeConfig } from '@/utils/ThemeConfig';
import { useTheme } from '@/utils/ScoutThemeProvider';

import NavigationBar from '@/components/NavigationBar';
import MainContentSlider from '@/components/MainContentSlider';
import SettingsModal from '@/components/SettingsModal';

import { IoMdFunnel } from 'react-icons/io';

import axios from 'axios';
import { useEffect, useState } from 'react';
import AnimeCard from '@/components/AnimeCard';

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
  justify-content: center;
  flex-wrap: wrap;
`

const Home = () => {
  const router = useRouter();

  const {theme} = useTheme();
  const [data, setData] = useState([]);

  useEffect(()=>{
    const GetAnime = async()=>{
      const result = await axios.get("/api/anime");
      console.log(result.data);
      setData(result.data);
    }

    GetAnime();
  }, [])

  

  return (
    <Page>
      <NavigationBar />
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
        <SettingsModal tcolor={ThemeConfig[theme].cardHeader} />
      <AnimeCardCont>
        
        {data.map((el, index) => 
          <AnimeCard 
            key={index}
            title={el.title}
            synopsis={el.synopsis}
            episodes={el.episodes}
            cardStatus={el.aired}
            img_url={el.img_url}
            aired={el.aired}
            onButtonClick={()=>router.push(`./anime/${el.uid}`)}
          />
        )}
      </AnimeCardCont>
    </Page>
  )
}

export default Home;
