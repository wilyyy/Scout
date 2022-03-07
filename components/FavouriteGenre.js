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
`;

const FavouriteGenre = ({
    genreName = "Romance"
}) => {
    return (
        <Cont>
            <GenreCont />
        </Cont>
    )
}

export default FavouriteGenre;