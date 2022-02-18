import styled from "styled-components";
import Image from 'next/image';
import { motion } from "framer-motion";

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Container = styled.div`
    width: 100%;
    height: 556px;
    display: flex;
    flex-direction: column;
    font-family: "Poppins-ExtraLight";
`;

const CarouselCont = styled.div`
    width: 100%;
`


const MainContentSlider = () => {
    return (
        <Container>
            <CarouselCont>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}>
                <Slider>
                    <Slide index={0}>I am the first Slide.</Slide>
                    <Slide index={1}>I am the second Slide.</Slide>
                    <Slide index={2}>I am the third Slide.</Slide>
                </Slider>
            </CarouselProvider>
            </CarouselCont>
        </Container>
    )
}

export default MainContentSlider;