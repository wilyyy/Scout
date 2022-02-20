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
`;

const MainContentSlider = ({

}) => {

    const {theme} = useTheme();

    return (
        <Container>
            
        </Container>
    )
}

export default MainContentSlider;