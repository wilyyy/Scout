import styled from 'styled-components';
import {Router, useRouter} from 'next/router';
import { LightColors, ThemeConfig } from '@/utils/ThemeConfig';
import { useTheme } from '@/utils/ScoutThemeProvider';

import NavigationBar from '@/components/NavigationBar';
import MainContentSlider from '@/components/MainContentSlider';
import SettingsModal from '@/components/SettingsModal';

import { IoMdFunnel } from 'react-icons/io';

import axios from 'axios';
import qs from 'qs';
import { useEffect, useState } from 'react';
import AnimeCard from '@/components/AnimeCard';

import {
  useGenre, 
  useScore, 
  useEpisodes, 
  useSortKey, 
  useSortType,
  useSearch,
  useData} from '@/utils/ScoutThemeProvider';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 20px;
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

const DarkenBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${props=>props.darkz};
  opacity: ${props=>props.darkop};
  transition: opacity 0.5s;
`;

let timer = null;

const Home = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const {theme} = useTheme();
  const {data, setData} = useData();
  const {genre} = useGenre();
  const {score} = useScore();
  const {episodes} = useEpisodes();
  const {sortKey} = useSortKey();
  const {sortType} = useSortType();
  const {search, setSearch} = useSearch();

  useEffect(()=>{
    const GetAnime = async()=>{
      const result = await axios.get("/api/anime");
      console.log(result.data);
      setData(result.data);
    }

    GetAnime();
  }, [])

  const inputFilter = async (txt) => {
    setSearch(txt)
    console.log(search);
    if(timer){
      clearTimeout(timer);
      timer = null;
    }

    if(timer === null) {
      timer = setTimeout(async ()=>{
        console.log('async call');

        console.log(genre);

        const res = await axios.get("/api/anime", {
          params: {
            txt:txt,
            genreFilter: genre,
            scoreFilter: score,
            episodeFilter: episodes,
            sortKeyFilter: sortKey,
            sortTypeFilter: sortType
          },

          paramsSerializer: params => {
            
            return qs.stringify(params, { arrayFormat: "repeat"})
          }
        })

        setData(res.data);
        timer = null;
      }, 1000)
    }
  }

  const SettingsAppear = () => {
    setModalVisible(true);
  }

  const SettingsExit = () => {
    setModalVisible(false);
  }

  return (
    <Page>
      <DarkenBackground 
        darkz = {modalVisible === true ? 5 : -5}
        darkop = {modalVisible === true ? 1 : 0}
        onClick = {SettingsExit}
      />
      <NavigationBar 
      onSearchType={(e)=>{inputFilter(e.target.value)}}
      onFilterClick={SettingsAppear}
      />
      <MainContentSlider 
        titletext1='Demon Slayer' 
        desctext1='After a demon attack leaves his family slain and his sister cursed, Tanjiro embarks upon a perilious journey to find a cure and avenge those he’s lost.'
        bottext='Your most recently watched anime'
        curEp='7'
        totEp='12'
        />
      <BodyHeader>
        <HeaderText>Explore</HeaderText>
      </BodyHeader>
        <SettingsModal 
          tcolor={LightColors.PapayaWhip}
          ExitClick={SettingsExit}
          setScaleFactor={modalVisible ? 1 : 0.5}
          setOp = {modalVisible ? 1 : 0}
          />
      <AnimeCardCont>
        
        {data.map((el, index) => 
          <AnimeCard 
            key={index}
            title={el.title}
            synopsis={el.synopsis}
            episodes={el.episodes}
            img_url={el.img_url}
            aired={el.score}
            onButtonClick={()=>router.push(`./anime/${el.uid}`)}
          />
        )}
      </AnimeCardCont>
      <button onClick={()=>console.log(search)}>Button Check</button>
    </Page>
  )
}

export default Home;
