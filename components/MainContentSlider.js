import styled from "styled-components";
import Image from 'next/image';
import Tanjiro from '../public/test_demonslayer.jpg';

import { motion } from "framer-motion";

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const Container = styled.div`
    width: 80%;
    height: 556px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Poppins-ExtraLight";
`;

const CarouselCont = styled.div`
    width: 80%;
    background-color: rgba(0,0,0,0.2);
    min-height: 494px;
    max-height: 494px;
    display: flex;
    justify-content: center;

`


const MainContentSlider = () => {
    return (
        <Container>
            <CarouselCont>
            <CarouselProvider
                naturalSlideWidth={1000}
                naturalSlideHeight={494}
                totalSlides={3}
                infinite={true}
                interval={500}
                isPlaying={true}>
                <Slider className="slider">
                    <Slide index={0} className="slide">
                        <Image src={Tanjiro} height="556px" width="1000px" />
                    </Slide>
                    <Slide index={1} className="slide">
                        <Image src={Tanjiro} height="556px" width="1000px" />
                    </Slide>
                    <Slide index={2} className="slide">
                        <Image src={Tanjiro} height="556px" width="1000px" />
                    </Slide>
                </Slider>
            </CarouselProvider>
            </CarouselCont>
        </Container>
    )
}

export default MainContentSlider;