import styled from 'styled-components';

import { IconContext } from 'react-icons';
import { BsFillBookmarkFill } from 'react-icons/bs';

import { useTheme } from '../utils/ScoutThemeProvider';
import { ThemeConfig } from '../utils/ThemeConfig';

const CardCont = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 271px;
  height: 578px;
  padding: 20px;
  border-radius: 16px;

  background-color: ${props=>props.bgcolor};
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

  src = "/anime.png",
  fontFamily = "Poppins-Regular",
  cardTitle = "[Missing Title]",
<<<<<<< HEAD
  cardDescription = "[Missing Description]",
  cardCurEp = "##",
  cardTotEp = "##",
  cardStatus = "[Missing Status]",
  bgcolor,
  hcolor,
  bcolor,
  dcolor,
  icolor,

=======
  cardDescription = "[Missing Description",
  cardEpisodeCount = "##/##",
  cardStatus = "[Missing Status]",
  AnimeTitle = "[Anime Title]",
  AnimeDesc = "[Anime Description]",
  AnimeEps = "[##/##]",
  AnimeStatus ="[Status]"
>>>>>>> 75e3f743e3d90292a4ded6657a39a14efa8caa2c

}) => {

  const { theme } = useTheme();

  return (
    <CardCont bgcolor={bgcolor} fontFamily={fontFamily}>
      <CardImage src={src} />
      <TextCont>
      <Row>
        <Header 
        hcolor={hcolor}>{cardTitle}</Header>
        <IconContext.Provider value={{color: icolor, size: "2em"}}>
          <BsFillBookmarkFill  />
        </IconContext.Provider>
      </Row>
      <Body bcolor={bcolor}>
        {cardDescription}
      </Body>
      <Divider dopacity="0.2" dcolor={dcolor}>------------------</Divider>
      <DetailCont>
        <div>
        <Header hcolor={hcolor}>{cardCurEp}/{cardTotEp}</Header>
        <Details bcolor={bcolor}>Episodes</Details>
        </div>
        <div>
        <Header hcolor={hcolor}>{cardStatus}</Header>
        <Details bcolor={bcolor}>Status</Details>
        </div>
      </DetailCont>
      </TextCont>
    </CardCont>
  )
}

export default AnimeCard;