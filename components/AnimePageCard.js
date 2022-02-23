//delete and put in dynamic comp later

import Image from "next/image";
import styled from "styled-components";

import { useTheme } from '../utils/ScoutThemeProvider';
import { ThemeConfig } from "../utils/ThemeConfig";

const Container = styled.div`
    width: 1200px;
    height: 400px;
    display: flex;
    border-radius: 15px;
    justify-content: space-between;
    overflow: hidden;
    font-family: Inter, sans-serif;
`;

const Card = styled.div`
    width: 85%;
    height: 400px;
    background: purple;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(152.97deg, ${props=>props.gradient1} 0%, ${props=>props.gradient2} 100%);
`;

const Row = styled.div`
    display: flex;
    align-items: center;

    ${({large}) => large && `
        width: 95%;
        height: 350px;
        justify-content: space-between;
    `}

    ${({small}) => small && `
        width: 421px; 
        height: 183px;
    `}

    ${({score}) => score && `
        width: 277px;
        height: 36px;
        justify-content: space-between;
    `}

    ${({midright}) => midright && `
        width: 421px;
        height: 103px;
        justify-content: space-between;
    `}
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;

    ${({title}) => title && `
        width: 430px;
        height: 100%;
        justify-content: space-between;
    `}

    ${({sypnosis}) => sypnosis && `
        width: 430px;
        height: 236px;
        justify-content: space-evenly;
    `}

    ${({right}) => right && `
        width: 421px;
        height: 100%;
        justify-content: space-between;
        align-items: center;
    `}

    ${({midright}) => midright && `
        width: 133px;
        height: 100px;
        justify-content: space-evenly;
    `}

    ${({match}) => match && `
        width: auto;
        height: 84px;
        justify-content: space-between;
        align-items: center;
    `}
`;

const Text = styled.p`
    color: ${props=>props.color};
    ${({H1}) => H1 && `
        font-size: 24px;
        font-family: "Poppins";
    `}

    ${({H2}) => H2 && `
        font-size: 18px;
    `}

    ${({Para1}) => Para1 && `
        font-size: 16px;
    `}

    ${({Para2}) => Para2 && `
        font-size: 13px;
    `}
`;

const Divider = styled.div`
    width: 2px;
    height: 100%;
    background-color: ${props=> props.color};
`;

const MatchBar = styled.div`
    width: 421px;
    height: 20px;
    background: red;
`;

//replace with next img or nah? decide later
const Testimg = styled.img`
    width: 20%;
    height: auto;
`;

const AnimePageCard = ({
    uid,
    title, 
    synopsis,
    score,
    ranked,
    popularity,
    genre,
    aired,
    episodes,
    img_url,
    matchPercent=86
}) => {
    const {theme, setTheme} = useTheme();

    return (
        <Container>
            <Testimg src={img_url} alt="anime image"/>
            <Card
                gradient1={ThemeConfig[theme].cardGradient}
                gradient2={ThemeConfig[theme].cardGradient2}
            >
                <Row large>
                    <Column title>
                        <Text H1>{title}</Text>
                        <Column sypnosis>
                            <Text H2>Overview</Text>
                            <Text Para2 color={ThemeConfig[theme].body}>{synopsis}</Text>
                        </Column>
                    </Column>
                    <Divider color={ThemeConfig[theme].text} />
                    <Column right>
                        <Row score>
                            <Text H1>Score: {score}</Text>
                            <Text para1 color={ThemeConfig[theme].body}>|</Text>
                            <Text para1 color={ThemeConfig[theme].body}>{aired}</Text>
                        </Row>
                        <Row midright>
                            <Column midright>
                                <Text Para1>Rank</Text>
                                <Text H2>#{ranked}</Text>
                                <Text Para1>Seasons: 1</Text>
                            </Column>
                            <Column midright>
                                <Text Para1>Popularity</Text>
                                <Text H2>#{popularity}</Text>
                                <Text Para1>Episodes: {episodes}</Text>
                            </Column>
                            <Column midright>
                                <Text Para1>Genres</Text>
                                <Text H2>{genre}</Text>
                            </Column>
                        </Row>
                        <Column match>
                            <Text Para1>Based on your favourites, {title} is a</Text>
                            <MatchBar />
                            <Text Para1>{matchPercent}% match</Text>
                        </Column>
                    </Column>
                </Row>
            </Card>
        </Container>
    )
}

export default AnimePageCard;