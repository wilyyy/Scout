import styled from "styled-components";

import { useTheme } from "../utils/ScoutThemeProvider";
import { ThemeConfig } from "../utils/ThemeConfig";

const SettingsCont = styled.div`
  width: 600px;
  height: 500px;
  background-color: rgba(196, 196, 196, 0.1);
  box-shadow: inset 43.3333px -43.3333px 43.3333px rgba(149, 149, 149, 0.1), 
              inset -43.3333px 43.3333px 43.3333px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(86.6667px);
  border-radius: 16px;
  display: flex;
`;

const SectionCont = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SectionTitle = styled.div`
  font-family: Inter, sans-serif;
  font-size: 22px;
  color: ${props=>props.tcolor};
`


const SettingsModal = ({

  tcolor,

}) => {

  const {theme} = useTheme();

  return (
    <SettingsCont>
      <SectionCont>
        <SectionTitle tcolor={tcolor}>Filter By</SectionTitle>
      </SectionCont>
      <SectionCont>
        <SectionTitle tcolor={tcolor}>Sort By</SectionTitle>
      </SectionCont>
    </SettingsCont>
  )
}

export default SettingsModal;

