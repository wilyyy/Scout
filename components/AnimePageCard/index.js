//delete and put in dynamic comp later

import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
    width: 80%;
    height: 300px;
    display: flex;
    border-radius: 15px;
    justify-content: space-between;
    overflow: hidden;
    background: pink;
`;

const Card = styled.div`
    width: 80%;
    height: 300px;
    background: #000;
`;

const Row = styled.div`
    display: flex;

    ${({large})=> large && `
        
    `}
    ${({small})=> large && `

    `}
`;

const Column = styled.div``;

const AnimePageCard = ({
    title, 
    sypnosis, 
    score,
    ranked, 
    popularity,
    genres,
    aired,
    episodes,
    img_url
}) => {
    return (
        <Container>
            <img></img>
            <Card>
                asdasd
            </Card>
        </Container>
    )
}

export default AnimePageCard;