import styled from "styled-components";
import { RiBookmarkFill } from "react-icons/ri"

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { useTheme } from "../utils/ScoutThemeProvider";
import { ThemeConfig } from "../utils/ThemeConfig";
import Button from "./Button";

const Container = styled.div`
    width: 80%;
    height: 556px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: "Poppins-ExtraLight";
    padding: 0 5%;
    border: 1px solid red;
`;

const ImgCont = styled.div`
    width: 100%;
    height: 494px;
    overflow: hidden;
    background: no-repeat url(${props=>props.bgimage}) top center;
    border-radius: 16px;
    padding: 25px;
    display: flex;
    align-items: flex-end;
`;

const BlurCont = styled.div`
    height: 200px;
    width: 100%;
    backdrop-filter: blur(89.4px);
    background: rgba(196, 196, 196, 0.1);
    border-radius: 16px;
    padding: 18px 39px 0;
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    font-family: 'Poppins-Regular';
    font-size: 24px;
    line-height: 31px;
    color: white;
    margin-bottom: 16px;
`

const BottomText = styled.div`
    font-family: 'Poppins-Regular';
    font-size: 24px;
    line-height: 31px;
    color: ${props=>props.textcolor};
`

const Description = styled.div`
    font-family: 'Poppins-Regular';
    font-size: 24px;
    line-height: 36px;
    color: white;
`

const Bookmark = styled.div`
    position: absolute;
    right: 25px;
`

const Row = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-self: flex-start;
align-items: center;
`

const MainContentSlider = ({

    bgimage = "/test_demonslayer.jpg",
    titletext1 = "Default",
    desctext1 = "Default",
    bottext = "Default",

}) => {

    const {theme} = useTheme();

    return (
        <Container>
            <CarouselProvider
                naturalSlideWidth={1000}
                naturalSlideHeight={494}
                totalSlides={3}
                infinite={true}
                isPlaying={true}
                className="Carousel"
                >
                <Slider className="slider">
                    <Slide index={0} className="slide">
                        <ImgCont bgimage={bgimage}>
                            <BlurCont>
                                <Title>{titletext1}</Title>
                                <Description>{desctext1}</Description>
                                <Bookmark>
                                    <RiBookmarkFill size="45px" color={ThemeConfig[theme].text} />
                                </Bookmark>
                            </BlurCont>
                        </ImgCont>
                    </Slide>
                    <Slide index={1} className="slide">
                        <ImgCont bgimage={bgimage}>
                            <BlurCont>
                                <Title>{titletext1}</Title>
                                <Description>{desctext1}</Description>
                                <Bookmark>
                                    <RiBookmarkFill size="45px" color={ThemeConfig[theme].text} />
                                </Bookmark>
                            </BlurCont>
                        </ImgCont>
                    </Slide>
                    <Slide index={2} className="slide">
                        <ImgCont bgimage={bgimage}>
                            <BlurCont>
                                <Title>{titletext1}</Title>
                                <Description>{desctext1}</Description>
                                <Bookmark>
                                    <RiBookmarkFill size="45px" color={ThemeConfig[theme].text} />
                                </Bookmark>
                            </BlurCont>
                        </ImgCont>
                    </Slide>
                </Slider>
            </CarouselProvider>
            <Row>
                <BottomText textcolor={ThemeConfig[theme].cardHeader}>
                    {bottext}
                </BottomText>
                <Button btnText="Continue" />
            </Row>
        </Container>
    )
}

export default MainContentSlider;