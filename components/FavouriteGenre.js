import styled from 'styled-components';

const Cont = styled.div`
    width: 800px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const GenreCont = styled.div`
    width: 80px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F4A259;
    color: #000;
    border-radius: 5px;
    font-size: 10px;
    font-weight: 400;
`;

const TextCont = styled.h1`
    font-size: 20px;
    align-self: flex-start;
    margin-left: 50px;
    font-weight: 300;
`;


const ContainerGenre = styled.div`
    width: 700px;
    height: 200px;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
`;
const FavouriteGenre = ({
    genreName = "Action",
    nameGenre = "Steven's favourite genres",
}) => {
    return (
        <Cont>
            <TextCont> {nameGenre} </TextCont>
            <ContainerGenre>
            <GenreCont> {genreName} </GenreCont>
            <GenreCont> {genreName} </GenreCont>
            <GenreCont> {genreName} </GenreCont>
            <GenreCont> {genreName} </GenreCont>
            <GenreCont> {genreName} </GenreCont>
            </ContainerGenre>
        </Cont>
    )
}

export default FavouriteGenre;