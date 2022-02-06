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

  background-color: ${props=>props.backgroundColor};
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
  color: ${props=>props.headerColor};
  font-weight: 400;
`

const Body = styled.p`
  font-size: 18px;
  color: ${props=>props.bodyColor};
  opacity: ${props=>props.bodyOpacity};
  margin: 0;
`

const Details = styled.p`
  font-size: 16px;
  color: ${props=>props.bodyColor};
  opacity: ${props=>props.bodyOpacity};
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
  color: ${props=>props.dividerColor};
  opacity: ${props=>props.dividerOpacity};
  margin: 15px 0;
`

const AnimeCard = ({

  src = "/anime.png",
  fontFamily = "Poppins-Regular",
  bodyOpacity = 0.7,
  dividerOpacity = 0.2,

}) => {

  const { theme } = useTheme();

  return (
    <CardCont backgroundColor={ThemeConfig[theme].cardBackground} fontFamily={fontFamily}>
      <CardImage src={src} />
      <TextCont>
      <Row>
        <Header 
        headerColor={ThemeConfig[theme].altText}>Attack On Titan</Header>
        <IconContext.Provider value={{color: ThemeConfig[theme].text, size: "2em"}}>
          <BsFillBookmarkFill  />
        </IconContext.Provider>
      </Row>
      <Body bodyColor={ThemeConfig[theme].altText} bodyOpacity={bodyOpacity}>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Volutpat id eget amet cursus fringilla augue.
      </Body>
      <Divider dividerOpacity={dividerOpacity} dividerColor={ThemeConfig[theme].altText}>------------------</Divider>
      <DetailCont>
        <div>
        <Header headerColor={ThemeConfig[theme].altText}>22/77</Header>
        <Details bodyColor={ThemeConfig[theme].altText} bodyOpacity={bodyOpacity}>Episodes</Details>
        </div>
        <div>
        <Header headerColor={ThemeConfig[theme].altText}>Ongoing</Header>
        <Details bodyColor={ThemeConfig[theme].altText} bodyOpacity={bodyOpacity}>Status</Details>
        </div>
      </DetailCont>
      </TextCont>
    </CardCont>
  )
}

export default AnimeCard;