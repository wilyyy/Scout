import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import qs from 'qs';
import { useTheme, useGenre, useScore, useEpisodes, useSortKey, useSortType, useSearch, useData } from "@/utils/ScoutThemeProvider";
import { ThemeConfig } from "@/utils/ThemeConfig";

//Filter Stuff
import { Genres, ScoreMarks, EpisodeMarks } from "@/utils/filters";
import { FormControl, Select, MenuItem, ListItemText, Checkbox, Box, Slider } from "@mui/material";
import {BsCaretUpFill, BsCaretDownFill} from "react-icons/bs";

import Button from "./Button";

const SettingsCont = styled.div`
  width: 600px;
  height: 500px;
  background: ${props=>props.bgcolor};
  box-shadow: inset 43.3333px -43.3333px 43.3333px rgba(149, 149, 149, 0.1), 
              inset -43.3333px 43.3333px 43.3333px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(86.6667px);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SettingsRow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const SectionCont = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const SubSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const FilterCont = styled.div`
  display: flex;
  flex-direction: column;
`

const SectionTitle = styled.div`
  font-family: Inter, sans-serif;
  font-size: 22px;
  color: ${props=>props.tcolor};
  align-self: center;
  margin-bottom: 22px;
`

const SectionHeader = styled.label`
  font-family: Inter, sans-serif;
  font-size: 18px;
  color: ${props=>props.tcolor};
  margin-bottom: 22px;
`

const Line = styled.div`
  height: 320px;
  width: 2px;
  background-color: #4F4F4F;
`

const SortCont = styled.div`
  width: 200px;
  height: 80px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
`

const SortLabel = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${props=>props.sortlabelcolor}; //#D8D8D8
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-family: Inter, sans-serif;
  font-weight: 600;
`

const SortArrowCont = styled.div`
  width: 100%;
  height: 50%;
  background-color: #F1F1F1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
  disableScrollLock: true

};

const SettingsModal = ({
  tcolor
}) => {

  const {theme} = useTheme();
  const {search} = useSearch();
  const {data, setData} = useData();
  
  //Provider states for actual filtering
  const {genre, setGenre} = useGenre();
  const {score, setScore} = useScore();
  const {episodes, setEpisodes} = useEpisodes();
  const {sortKey, setSortKey} = useSortKey();
  const {sortType, setSortType} = useSortType();

  //Temporary states to set filters to before pressing apply
  const [tempGenre, setTempGenre] = useState([]);
  const [tempScore, setTempScore] = useState([0, 10]);
  const [tempEpisodes, setTempEpisodes] = useState([0, 100]);
  const [tempKey, setTempKey] = useState('title');
  const [tempType, setTempType] = useState('asc');

  const handleTempGenre = (event) => {
    const {
      target: { value },
    } = event;
    setTempGenre(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleTempScore = (event, newScore) => {
    setTempScore(newScore);
  };

  const handleTempEpisodes = (event, newEpisodes) => {
    setTempEpisodes(newEpisodes);
  }

  const handleTempSort = (newKey, newType) => {
    setTempKey(newKey);
    setTempType(newType);
  }

  const ApplyFilters = async () => {
    setGenre(tempGenre);
    setScore(tempScore);
    setEpisodes(tempEpisodes);
    setSortKey(tempKey);
    setSortType(tempType);
    const res = await axios.get("/api/anime", {
      params: {
        txt: search,
        genreFilter: genre,
        scoreFilter: score,
        episodeFilter: episodes,
        sortKeyFilter: sortKey,
        sortTypeFilter: sortType
      },

      paramsSerializer: params => {     
        return qs.stringify(params, { arrayFormat: "repeat"})
      }
    });

    setData(res.data);

  }

  const ResetFilters = () => {
    setGenre([]);
    setScore([0, 10]);
    setEpisodes([0, 100]);
    setSortKey('title');
    setSortType('asc');
    
    setTempGenre([]);
    setTempScore([0, 10]);
    setTempEpisodes([0, 100]);
    setTempKey(['title']);
    setTempType(['asc'])
  }


  return (
    <SettingsCont bgcolor={ThemeConfig[theme].cardBackground}>
      <SettingsRow>
        <SectionCont>
          <SectionTitle tcolor={tcolor}>Filter By</SectionTitle>
          <SubSection>
            <FilterCont>
              <SectionHeader tcolor={tcolor}>Genre</SectionHeader>
              <FormControl sx={{width: 220}}>
              <Select
                multiple
                value={tempGenre}
                onChange={handleTempGenre}
                sx={{
                  backgroundColor: 'white', 
                  fontFamily: 'Inter, sans-serif',
                  height: 30
                }} 
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {Genres.map((name) => (
                  <MenuItem key={name} value={name} sx={{py: 0}}>
                    <ListItemText 
                      primary={name} 
                      primaryTypographyProps={{fontFamily: 'Inter, sans-serif'}}
                      />
                    <Checkbox 
                      checked={tempGenre.indexOf(name) > -1}
                      sx={{
                        color: ThemeConfig[theme].text,
                        '&.Mui-checked': {
                          color: ThemeConfig[theme].text,
                        },
                      }} />
                  </MenuItem>
                ))}
              </Select>
              </FormControl>
            </FilterCont>
            <FilterCont>
            <SectionHeader tcolor={tcolor}>Score</SectionHeader>
            <Box sx={{width: 200, pt: 2}}>
              <Slider
                sx={{color: ThemeConfig[theme].text}}
                min={0}
                step={0.1}
                max={10}
                valueLabelDisplay="on"
                value={tempScore}
                onChange={handleTempScore}
                marks={ScoreMarks}
              />
            </Box>
            </FilterCont>
            <FilterCont>
            <SectionHeader tcolor={tcolor}>Episodes</SectionHeader>
            <Box sx={{width: 200, pt: 2}}>
              <Slider
                sx={{color: ThemeConfig[theme].text}}
                valueLabelDisplay="on"
                value={tempEpisodes}
                onChange={handleTempEpisodes}
                marks={EpisodeMarks}
              />
            </Box>
            </FilterCont>
          </SubSection>
        </SectionCont>
        <Line />
        <SectionCont>
          <SectionTitle tcolor={tcolor}>Sort By</SectionTitle>
          <SubSection>
          <SortCont>
              <SortLabel sortlabelcolor={tempKey === 'title' ? ThemeConfig[theme].text : '#D8D8D8'}>
                Title
              </SortLabel>
              <SortArrowCont>
                <BsCaretUpFill 
                  size="32px" 
                  onClick={()=>handleTempSort('title', 'asc')} 
                  color={tempKey === 'title' && tempType === 'asc' ? ThemeConfig[theme].text : 'black'}
                  style={{cursor: 'pointer'}}/>
                <BsCaretDownFill 
                  size="32px" 
                  onClick={()=>handleTempSort('title', 'desc')} 
                  color={tempKey === 'title' && tempType === 'desc' ? ThemeConfig[theme].text : 'black'}
                  style={{cursor: 'pointer' }}/>
              </SortArrowCont>
            </SortCont>
            <SortCont>
              <SortLabel sortlabelcolor={tempKey === 'score' ? ThemeConfig[theme].text : '#D8D8D8'}>
                Score
              </SortLabel>
              <SortArrowCont>
                <BsCaretUpFill 
                  size="32px" 
                  onClick={()=>handleTempSort('score', 'asc')} 
                  color={tempKey === 'score' && tempType === 'asc' ? ThemeConfig[theme].text : 'black'}
                  style={{cursor: 'pointer'}}/>
                <BsCaretDownFill 
                  size="32px" 
                  onClick={()=>handleTempSort('score', 'desc')} 
                  color={tempKey === 'score' && tempType === 'desc' ? ThemeConfig[theme].text : 'black'}
                  style={{cursor: 'pointer' }}/>
              </SortArrowCont>
            </SortCont>
            <SortCont>
            <SortLabel sortlabelcolor={tempKey === 'popularity' ? ThemeConfig[theme].text : '#D8D8D8'}>
                  Popularity
              </SortLabel>
              <SortArrowCont>
                <BsCaretUpFill 
                  size="32px" 
                  onClick={()=>handleTempSort('popularity', 'asc')} 
                  color={tempKey === 'popularity' && tempType === 'asc' ? ThemeConfig[theme].text : 'black'}
                  style={{cursor: 'pointer' }}/>
                <BsCaretDownFill
                  size="32px" 
                  onClick={()=>handleTempSort('popularity', 'desc')} 
                  color={tempKey === 'popularity' && tempType === 'desc' ? ThemeConfig[theme].text : 'black'}
                  style={{cursor: 'pointer' }}/>
              </SortArrowCont>
            </SortCont>
          </SubSection>
        </SectionCont>
      </SettingsRow>
      <Row>
        <Button 
          btnText="Apply" 
          onClick={ApplyFilters} 
          btnwidth="120px" 
          btnmargin="0 10px" />
        <Button 
          btnText="Reset" 
          onClick={ResetFilters}  
          btnwidth="120px" 
          btnmargin="0 10px" />
      </Row>
      <button onClick={()=>console.log('Temp', tempGenre, 'Real', genre)}>Button Check</button>
    </SettingsCont>
  )
}

export default SettingsModal;