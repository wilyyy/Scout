//use uuid to generate user personal list?

import axios from "axios";
import styled from "styled-components";
import { useEffect, useState, useRef } from 'react';
import {useRouter} from 'next/router';
import { LightColors, ThemeConfig } from '@/utils/ThemeConfig';
import { v4 as uuidv4 } from 'uuid';

import NavigationBar from '@/components/NavigationBar';
import MainContentSlider from '@/components/MainContentSlider';
import SettingsModal from '@/components/SettingsModal';
import AnimeCard from '@/components/AnimeCard';

import {
    useTheme,
    useGenre, 
    useScore, 
    useEpisodes, 
    useSortKey, 
    useSortType,
    useSearch,
    useData,
    useYourList
  } from '@/utils/ScoutThemeProvider';

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

const YourList = () => {
    const router = useRouter();
    const {uuid} = router.query;

    const {yourList, setYourList} = useYourList();
    const [modalVisible, setModalVisible] = useState(false);


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
                onYourListClick={()=>router.push(`./${uuidv4()}`)} 
            />
            {/* <MainContentSlider 
                titletext1='Demon Slayer' 
                desctext1='After a demon attack leaves his family slain and his sister cursed, Tanjiro embarks upon a perilious journey to find a cure and avenge those he’s lost.'
                bottext='Your most recently watched anime'
                curEp='7'
                totEp='12'
            /> */}
            <BodyHeader>
            <HeaderText>Your List</HeaderText>
            </BodyHeader>
            <SettingsModal 
                tcolor={LightColors.PapayaWhip}
                ExitClick={SettingsExit}
                setScaleFactor={modalVisible ? 1 : 0.5}
                setOp = {modalVisible ? 1 : 0}
                setZ = {modalVisible? 10 : -10}
            />
            <AnimeCardCont>
            
            {Object.values(yourList).map((el, index) =>
                <AnimeCard 
                    key={index}
                    title={el.title}
                    synopsis={el.synopsis}
                    episodes={el.episodes}
                    img_url={el.img_url}
                    aired={el.score}
                    onButtonClick={()=>router.push(`../anime/${el.uid}`)}
                />
            )}
            </AnimeCardCont>
            <button onClick={()=>console.log(search)}>Button Check</button>
        </Page>
    )
}

export default YourList;