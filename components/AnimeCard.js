import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { IconContext } from 'react-icons';
import { BsBookmarkCheckFill, BsBookmark } from 'react-icons/bs';
import { useTheme } from '../utils/ScoutThemeProvider';
import { ThemeConfig } from '../utils/ThemeConfig';
import { HoverZoom } from "../utils/Animations";

const CardCont = styled(motion.div)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 271px;
  height: 578px;
  padding: 15px;
  border-radius: 16px;
  margin: 40px 20px;
  cursor: pointer;
  border: 1px solid #6D7992;

  background: ${props=>props.bgcolor};
  backdrop-filter: blur(5px) saturate(164%);
  -webkit-backdrop-filter: blur(5px) saturate(164%);
  font-family: ${props=>props.fontFamily};
`

const CardImage = styled.img`
  width: 100%;
  height: 280px;
  border-radius: 16px;
  margin-bottom: 10px;
  object-fit: cover;
  object-position: top center;

`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`

const Header = styled.h4`
  margin: 0;
  font-size: 18px;
  line-height: 21px;
  color: ${props=>props.hcolor};
  font-weight: 400;
  width: 100%;
`

const DataHeader = styled.h4`
  margin: 0;
  font-size: 18px;
  line-height: 21px;
  color: ${props=>props.hcolor};
  font-weight: 400;
`

const Body = styled.div`
  font-size: 14px;
  color: ${props=>props.bcolor};
  font-weight: 200;
  margin: 0;
`

const Details = styled.p`
  font-size: 16px;
  color: ${props=>props.bcolor};
  opacity: ${props=>props.bopacity};
  margin: 0;
`

const DetailCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

const Divider = styled.p`
  font-size: 18px;
  color: ${props=>props.dcolor};
  opacity: ${props=>props.dopacity};
  margin: 15px 0;
`

const DataRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const iconStyle = {
  position: 'absolute',
  right: 5,
  top: 10,
  stroke: props=>props.iconStroke,
  strokeWidth: 1,
  overflow: 'visible'
}

const AnimeCard = ({
  img_url = "/anime.png",
  fontFamily = "Poppins",
  title = "[Missing Title]",
  synopsis = "[Missing Description]",
  episodes = "24",
  aired = "[Missing Status]",
  onButtonClick,
}) => {

  const { theme } = useTheme();

  const [favourite, setFavourite] = useState(true);

  const SynopsisSubstr = synopsis.substring(0, 80);

  return (
    <CardCont 
      fontFamily={fontFamily}
      onClick={onButtonClick}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.96}}
      transition={HoverZoom.spring}
      bgcolor={ThemeConfig[theme].cardBackground}
    >
      <CardImage src={img_url} alt="anime image"/>
      <TextCont>
        <Row>
        <Header hcolor={ThemeConfig[theme].body}>{title}</Header>
        {favourite === true ? (<BsBookmarkCheckFill size="40px"  />) : (<BsBookmark size="40px"/>) }
        </Row>
        <Body bcolor={ThemeConfig[theme].body}>
          {SynopsisSubstr}...
        </Body>
        <Divider dopacity="0.2" dcolor={ThemeConfig[theme].body}>------------------</Divider>
        <DetailCont>
          <DataRow>
            <Details bcolor={ThemeConfig[theme].body}>Episodes</Details>
            <DataHeader hcolor={ThemeConfig[theme].text}>21/{episodes}</DataHeader>
          </DataRow>
          <DataRow>
            <Details bcolor={ThemeConfig[theme].body}>Score</Details>
            <DataHeader hcolor={ThemeConfig[theme].text}>{aired}</DataHeader>
          </DataRow>
        </DetailCont>
      </TextCont>
    </CardCont>
  )
}

export default AnimeCard;