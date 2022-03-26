import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import FavCard from '@/components/FavCard';

const Cont = styled.div`
    box-sizing: border-box;
    width: 800px;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;

const TextCont = styled.h1`
    font-size: 20px;
    align-self: flex-start;
    margin-left: 50px;
    font-weight: 300;
`;

const CardCont = styled.div`
    display: flex;
    width: 800px;
    height: auto;
    justify-content: space-between;
    align-items: center;
`;

const FavSection = ({

    nameFav = "Steven's Favourites:",
    img_url = "/anime.png",
    title = "[Missing Title]"

}) => {
    return (
        <Cont>
            <TextCont> {nameFav} </TextCont>
            <CardCont>
            <BsChevronLeft size={30} />
            <FavCard src={img_url} alt="anime image"/>
            <FavCard src={img_url} alt="anime image"/>
            <FavCard src={img_url} alt="anime image"/>
            <FavCard src={img_url} alt="anime image"/>
            <FavCard src={img_url} alt="anime image"/>
            <BsChevronRight size={30} />
            </CardCont>
        </Cont>
    )
}

export default FavSection;