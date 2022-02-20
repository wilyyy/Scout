import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
    width: 200px;
    height: 275px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
`;

const Card = styled.div`
    width: 100%;
    height: 71px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Row = styled.div`
    width: 172px;
    height: 47px;
    display: flex;
    justify-content: space-between;
`;

const AnimePageRecCard = ({title, genre, onFavClick}) => {
    return (
        <>
        </>
    )
}

export default AnimePageRecCard;