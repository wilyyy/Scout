import styled from "styled-components";
import { useState } from "react";
import { useTheme } from "@/utils/ScoutThemeProvider";
import { ThemeConfig } from "@/utils/ThemeConfig";

//Filter Stuff
import { Genres, ScoreMarks, EpisodeMarks } from "@/utils/filters";
import { FormControl, Select, MenuItem, ListItemText, Checkbox, Box, Slider } from "@mui/material";
import {BsCaretUpFill, BsCaretDownFill} from "react-icons/bs";

import Button from "./Button";

const SettingsCont = styled.div`
  width: 600px;
  height: 500px;
  background-color: rgba(196, 196, 196, 0.1);
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
  tcolor,
}) => {

  const {theme} = useTheme();
  const [genre, setGenre] = useState([]);
  const [score, setScore] = useState([0, 10]);
  const [episode, setEpisode] = useState([0, 100]);
  const [sort, setSort] = useState('');
  const [type, setType] = useState('');

  const resetFilter = () => {
    setGenre([]);
    setScore([0, 10]);
    setEpisode([0, 100]);
    setSort('');
    setType('');
  }

  const handleGenre = (event) => {
    const {
      target: { value },
    } = event;
    setGenre(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleScore = (event, newScore) => {
    setScore(newScore);
  };

  const handleEpisode = (event, newEpisode) => {
    setEpisode(newEpisode);
  }

  const handleSort = (newSort, newType) => {
    setSort(newSort);
    setType(newType);
  }

  return (
    <SettingsCont>
      <SettingsRow>
        <SectionCont>
          <SectionTitle tcolor={tcolor}>Filter By</SectionTitle>
          <SubSection>
            <FilterCont>
              <SectionHeader for="genre" tcolor={tcolor}>Genre</SectionHeader>
              <FormControl sx={{width: 220}}>
              <Select
                labelId="genre"
                multiple
                value={genre}
                onChange={handleGenre}
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
                      checked={genre.indexOf(name) > -1}
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
                value={score}
                onChange={handleScore}
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
                value={episode}
                onChange={handleEpisode}
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
              <SortLabel sortlabelcolor={sort === 'score' ? ThemeConfig[theme].text : '#D8D8D8'}>
                Score
              </SortLabel>
              <SortArrowCont>
                <BsCaretUpFill 
                  size="32px" 
                  onClick={()=>handleSort('score', 'asc')} 
                  color={sort === 'score' && type === 'asc' ? ThemeConfig[theme].text : 'black'}
                  style={{cursor: 'pointer'}}/>
                <BsCaretDownFill 
                  size="32px" 
                  onClick={()=>handleSort('score', 'desc')} 
                  color={sort === 'score' && type === 'desc' ? ThemeConfig[theme].text : 'black'}
                  style={{cursor: 'pointer' }}/>
              </SortArrowCont>
            </SortCont>
            <SortCont>
            <SortLabel sortlabelcolor={sort === 'popularity' ? ThemeConfig[theme].text : '#D8D8D8'}>
                  Popularity
              </SortLabel>
              <SortArrowCont>
                <BsCaretUpFill 
                  size="32px" 
                  onClick={()=>handleSort('popularity', 'asc')} 
                  color={sort === 'popularity' && type === 'asc' ? ThemeConfig[theme].text : 'black'}
                  style={{cursor: 'pointer' }}/>
                <BsCaretDownFill
                  size="32px" 
                  onClick={()=>handleSort('popularity', 'desc')} 
                  color={sort === 'popularity' && type === 'desc' ? ThemeConfig[theme].text : 'black'}
                  style={{cursor: 'pointer' }}/>
              </SortArrowCont>
            </SortCont>
            <SortCont>
            <SortLabel sortlabelcolor={sort === 'releasedate' ? ThemeConfig[theme].text : '#D8D8D8'}>
                Release Date
              </SortLabel>
              <SortArrowCont>
              <BsCaretUpFill 
                  size="32px" 
                  onClick={()=>handleSort('releasedate', 'asc')} 
                  color={sort === 'releasedate' && type === 'asc' ? ThemeConfig[theme].text : 'black'}
                  style={{cursor: 'pointer' }}/>
                <BsCaretDownFill
                  size="32px" 
                  onClick={()=>handleSort('releasedate', 'desc')} 
                  color={sort === 'releasedate' && type === 'desc' ? ThemeConfig[theme].text : 'black'}
                  style={{cursor: 'pointer' }}/>
              </SortArrowCont>
            </SortCont>
          </SubSection>
        </SectionCont>
      </SettingsRow>
      <Row>
        <Button btnText="Apply" onClick={()=>console.log(sort, type)} btnwidth="120px" btnmargin="0 10px" />
        <Button btnText="Reset" onClick={resetFilter} btnwidth="120px" btnmargin="0 10px" />
      </Row>
    </SettingsCont>
  )
}

export default SettingsModal;