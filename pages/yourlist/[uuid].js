//use uuid to generate user personal list?

import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import { LightColors } from "@/utils/ThemeConfig";
import { v4 as uuidv4 } from "uuid";

import NavigationBar from "@/components/NavigationBar";
import SettingsModal from "@/components/SettingsModal";
import AnimeCard from "@/components/AnimeCard";

import {
   useYourList,
} from "@/utils/ScoutThemeProvider";

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
`;

const HeaderText = styled.div`
   font-size: 24px;
`;

const AnimeCardCont = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`;

const DarkenBackground = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.5);
   z-index: ${(props) => props.darkz};
   opacity: ${(props) => props.darkop};
   transition: opacity 0.5s;
`;

const YourList = () => {
   const router = useRouter();

   const { yourList } = useYourList();
   const [modalVisible, setModalVisible] = useState(false);

   const SettingsAppear = () => {
      setModalVisible(true);
   };

   const SettingsExit = () => {
      setModalVisible(false);
   };

   return (
      <Page>
         <DarkenBackground
            darkz={modalVisible === true ? 5 : -5}
            darkop={modalVisible === true ? 1 : 0}
            onClick={SettingsExit}
         />
         <NavigationBar
            onSearchType={(e) => {
               inputFilter(e.target.value);
            }}
            onFilterClick={SettingsAppear}
            onYourListClick={() => router.push(`./${uuidv4()}`)}
         />
         
         <BodyHeader>
            <HeaderText>Your List</HeaderText>
         </BodyHeader>
         <SettingsModal
            tcolor={LightColors.PapayaWhip}
            ExitClick={SettingsExit}
            setScaleFactor={modalVisible ? 1 : 0.5}
            setOp={modalVisible ? 1 : 0}
            setZ={modalVisible ? 10 : -10}
         />
         <AnimeCardCont>
            {Object.values(yourList).map((el, index) => (
               <AnimeCard
                  key={index}
                  title={el.title}
                  synopsis={el.synopsis}
                  episodes={el.episodes}
                  img_url={el.img_url}
                  aired={el.score}
                  onButtonClick={() => router.push(`../anime/${el.uid}`)}
               />
            ))}
         </AnimeCardCont>
         <button onClick={() => console.log(search)}>Button Check</button>
      </Page>
   );
};

export default YourList;
