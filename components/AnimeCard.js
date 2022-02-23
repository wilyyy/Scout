import styled from 'styled-components';
import { motion } from 'framer-motion';

import { IconContext } from 'react-icons';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { useTheme } from '../utils/ScoutThemeProvider';
import { ThemeConfig } from '../utils/ThemeConfig';
import { HoverZoom } from "../utils/Animations";

const CardCont = styled(motion.div)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 271px;
  height: 578px;
  padding: 20px;
  border-radius: 16px;
  margin: 5px;
  cursor: pointer;

  background: ${props=>props.bgcolor};
  box-shadow: inset 43.3333px -43.3333px 43.3333px rgba(149, 149, 149, 0.1), 
              inset -43.3333px 43.3333px 43.3333px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px) saturate(164%);
  -webkit-backdrop-filter: blur(5px) saturate(164%);
  font-family: ${props=>props.fontFamily};
`

const CardImage = styled.img`
  width: 100%;
  height: 151px;
  border-radius: 16px;
  margin-bottom: 15px;
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
  color: ${props=>props.hcolor};
  font-weight: 400;
`

const Body = styled.p`
  font-size: 18px;
  color: ${props=>props.bcolor};
  margin: 0;
`

const Details = styled.p`
  font-size: 16px;
  color: ${props=>props.bcolor};
  opacity: ${props=>props.bopacity};
  margin: 0;
`

const DetailCont = styled.div`
  width: 81px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
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

const AnimeCard = ({
  img_url = "/anime.png",
  fontFamily = "Poppins",
  title = "[Missing Title]",
  synopsis = "[Missing Description",
  episodes = "24",
  aired = "[Missing Status]",
  onButtonClick
}) => {

  const { theme } = useTheme();

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
        <Header 
        hcolor={ThemeConfig[theme].body}>{title}</Header>
        <IconContext.Provider value={{color: "red", size: "2em"}}>
          <BsFillBookmarkFill  />
        </IconContext.Provider>
      </Row>
      <Body bcolor={ThemeConfig[theme].body}>
        {SynopsisSubstr}...
      </Body>
      <Divider dopacity="0.2" dcolor={ThemeConfig[theme].body}>------------------</Divider>
      <DetailCont>
        <div>
        <Header hcolor={ThemeConfig[theme].body}>21/{episodes}</Header>
        <Details bcolor={ThemeConfig[theme].body}>Episodes</Details>
        </div>
        <div>
        <Header hcolor={ThemeConfig[theme].body}>{aired}</Header>
        <Details bcolor={ThemeConfig[theme].body}>Status</Details>
        </div>
      </DetailCont>
      </TextCont>
    </CardCont>
  )
}

export default AnimeCard;