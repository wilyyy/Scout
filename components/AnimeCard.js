import styled from 'styled-components';

import { BsFillBookmarkFill } from 'react-icons/bs';


const CardCont = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 271px;
  height: 578px;
  padding: 15px;

  background-color: ${props=>props.backgroundColor};
  font-family: ${props=>props.fontFamily};
`

const CardImage =styled.img`
  width: 228px;
  height: 151px;
`

const AnimeCard = ({

  backgroundColor = '#FAD',
  src = "/vercel.svg",
  fontFamily = "Poppins-Regular"

}) => {
  return (
    <CardCont backgroundColor={backgroundColor} fontFamily={fontFamily}>
      <CardImage src={src} />
      <h4>Attack On Titan</h4>
      <BsFillBookmarkFill />
      <p>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Volutpat id eget amet cursus fringilla augue.
      </p>
      <h4>22/77</h4>
      <p>Episodes</p>
      <h4>Ongoing</h4>
      <p>Status</p>
    </CardCont>
  )
}

export default AnimeCard;