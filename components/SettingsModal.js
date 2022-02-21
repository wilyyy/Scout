import styled from "styled-components";
import { useState } from "react";

import { useTheme } from "../utils/ScoutThemeProvider";
import { ThemeConfig } from "../utils/ThemeConfig";

import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

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
`

const SectionTitle = styled.div`
  font-family: Inter, sans-serif;
  font-size: 22px;
  color: ${props=>props.tcolor};
  align-self: center;
  margin-bottom: 22px;
`

const SectionHeader = styled.div`
  font-family: Inter, sans-serif;
  font-size: 18px;
  color: ${props=>props.tcolor};
`

const Genres = [
  'Action',
  'Adventure',
  'Avant Garde',
  'Award Winning',
  'Boys Love',
  'Comedy',
  'Drama',
  'Fantasy',
  'Girls Love',
  'Gourmet',
  'Horror',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'Slice of Life',
  'Sports',
  'Supernatural',
  'Suspense',
  'Work Life',
  'Ecchi',
  'Erotica',
  'Hentai',
  'Cars',
  'Demons',
  'Game',
  'Harem',
  'Historical',
  'Martial Arts',
  'Mecha',
  'Military',
  'Music',
  'Parody',
  'Police',
  'Psychological',
  'Samurai',
  'School',
  'Space',
  'Super Power',
  'Vampire',
  'Josei',
  'Kids',
  'Seinen',
  'Shoujo',
  'Shounen'
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SettingsModal = ({

  tcolor,

}) => {

  const {theme} = useTheme();
  const [genre, setGenre] = useState([]);

  const handleGenre = (e) => {
    const {
      target: { value },
    } = e;
    setGenre(
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  return (
    <SettingsCont>
      <SettingsRow>
        <SectionCont>
          <SectionTitle tcolor={tcolor}>Filter By</SectionTitle>
          <SubSection>
            <SectionHeader tcolor={tcolor}>Genre</SectionHeader>
            <FormControl sx={{ m: 1, width: 250 }}>
              <InputLabel id="demo-multiple-checkbox-label">Genre</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={genre}
                onChange={handleGenre}
                input={<OutlinedInput label="Genre" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {Genres.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox 
                      sx={{color:ThemeConfig[theme].text,
                        '&.Mui-checked': {
                          color:ThemeConfig[theme].text,
                        },
                      }} 
                      checked={genre.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <SectionHeader tcolor={tcolor}>Score</SectionHeader>
            <SectionHeader tcolor={tcolor}>Episodes</SectionHeader>
          </SubSection>
        </SectionCont>
        <SectionCont>
          <SectionTitle tcolor={tcolor}>Sort By</SectionTitle>
        </SectionCont>
      </SettingsRow>
      <Button btnText="Apply" />
    </SettingsCont>
  )
}

export default SettingsModal;

