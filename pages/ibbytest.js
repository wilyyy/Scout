import styled from 'styled-components';
import {Router, useRouter} from 'next/router';
import { LightColors, ThemeConfig } from '@/utils/ThemeConfig';
import { v4 as uuidv4 } from 'uuid';

import NavigationBar from '@/components/NavigationBar';
import MainContentSlider from '@/components/MainContentSlider';
import SettingsModal from '@/components/SettingsModal';
import ProfileFavCard from '@/components/ProfileFavCard';

import { IoMdFunnel } from 'react-icons/io';

import axios from 'axios';
import qs from 'qs';
import { useEffect, useState, useRef } from 'react';

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

const IbbyTest = () => {

  return (
    <Page>
      <NavigationBar/>
      <BodyHeader>
        <ProfileFavCard>

        </ProfileFavCard>
      </BodyHeader>
    </Page>
  )
}

export default IbbyTest;