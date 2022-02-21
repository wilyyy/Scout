import styled from "styled-components";
import { useState } from "react";
import { useTheme } from "@/utils/ScoutThemeProvider";
import { ThemeConfig } from "@/utils/ThemeConfig";

//GenreFilter
import { Genres } from "@/utils/genres";
import { FormControl, Select, MenuItem, ListItemText, Checkbox  } from "@mui/material";

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

const SortCont = styled.div`
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

  const handleGenre = (event) => {
    const {
      target: { value },
    } = event;
    setGenre(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <SettingsCont>
      <SettingsRow>
        <SectionCont>
          <SectionTitle tcolor={tcolor}>Filter By</SectionTitle>
          <SubSection>
            <SortCont>
              <SectionHeader for="genre" tcolor={tcolor}>Genre</SectionHeader>
              <FormControl sx={{width: 250}}>
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
            </SortCont>
            <SortCont>
            <SectionHeader tcolor={tcolor}>Score</SectionHeader>
            </SortCont>
            <SortCont>
            <SectionHeader tcolor={tcolor}>Episodes</SectionHeader>
            </SortCont>
          </SubSection>
        </SectionCont>
        <SectionCont>
          <SectionTitle tcolor={tcolor}>Sort By</SectionTitle>
        </SectionCont>
      </SettingsRow>
      <Button btnText="Apply" onClick={()=>console.log(genre)} />
    </SettingsCont>
  )
}

export default SettingsModal;

