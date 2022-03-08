import styled from 'styled-components';

const Cont = styled.div`
    width: 705px;
    height: 185px;
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
`;
const TextCont = styled.h1`
    font-size: 20px;
    align-self: flex-start;
    margin-left: 50px;
    font-weight: 300;
`;

const FavouriteGenre = ({
    genreName = "Romance"
}) => {
    return (
        <Cont>
            <GenreCont> {genreName} </GenreCont>
        </Cont>
    )
}

export default FavouriteGenre;