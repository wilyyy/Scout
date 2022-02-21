//delete and put in dynamic comp later

import Image from "next/image";
import styled from "styled-components";

import { useTheme } from '../../utils/ScoutThemeProvider';
import { ThemeConfig } from "../../utils/ThemeConfig";

const Container = styled.div`
    width: 80%;
    height: 300px;
    display: flex;
    border-radius: 15px;
    justify-content: space-between;
    overflow: hidden;
    background: pink;
    font-family: "Poppins-ExtraLight";
`;

const Card = styled.div`
    width: 85%;
    height: 300px;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Row = styled.div`
    display: flex;
    align-items: center;

    ${({large}) => large && `
        width: 90%;
        height: 236px;
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
        height: 236px;
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

const Testimg = styled.img`
    width: 20%;
    height: auto;
`;

const AnimePageCard = ({
    title="Demon Slayer", 
    sypnosis ="It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon hers", 
    score="8.67",
    ranked, 
    popularity,
    genres,
    aired="Finished Airing",
    episodes,
    img_url
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
                    </Column>
                </Row>
            </Card>
        </Container>
    )
}

export default AnimePageCard;