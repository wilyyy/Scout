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
    background: pink;
    font-family: "Poppins-ExtraLight";
`;

const Card = styled.div`
    width: 85%;
    height: 400px;
    background: purple;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Row = styled.div`
    display: flex;
    align-items: center;

    ${({large}) => large && `
        width: 95%;
        height: 306px;
        justify-content: space-between;
        background: green;
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
        background: yellow;
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
    title="Demon Slayer", 
    sypnosis ="It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon hers", 
    score="8.67",
    ranked="48", 
    popularity="36",
    genres="action, adventure, fighting",
    aired="Finished Airing",
    episodes="24",
    img_url,
    matchPercent=86
}) => {
    const {theme, setTheme} = useTheme();

    return (
        <Container>
            <Testimg src="https://placekitten.com/200/300" />
            <Card>
                <Row large>
                    <Column title>
                        <Text H1>{title}</Text>
                        <Column sypnosis>
                            <Text H2>Overview</Text>
                            <Text Para2 color={ThemeConfig[theme].body}>{sypnosis}</Text>
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
                                <Text H2>{genres}</Text>
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