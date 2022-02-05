import styled from 'styled-components';

import { BsFillBookmarkFill } from 'react-icons/bs';


const CardCont = styled.div`
  background-color: 
`

const AnimeCard = ({

}) => {
  return (
    <div>
      <img src="vercel.svg"/>
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
    </div>
  )
}

export default AnimeCard;