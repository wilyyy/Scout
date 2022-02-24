import styled from "styled-components";
import {useEffect} from 'react';
import { useData } from "@/utils/ScoutThemeProvider";
import { BsBookmarkCheckFill, BsBookmark } from 'react-icons/bs';

import { CarouselProvider, Slider } from 'pure-react-carousel';
import MySlide from '@/components/CarouselSlide'
import 'pure-react-carousel/dist/react-carousel.es.css';

import { useTheme } from "@/utils/ScoutThemeProvider";
import Button from "./Button";
import { ThemeConfig } from "@/utils/ThemeConfig"

import axios from 'axios';
import qs from 'qs';

const Container = styled.div`
    width: 80%;
    height: 494px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: "Poppins";
    font-weight: 400;
    padding: 0 5%;
    margin-bottom: 100px;
`;

const MainContentSlider = () => {

    const {data, setData} = useData();

    useEffect(()=>{
        const GetAnime = async()=>{
        const result = await axios.get("/api/anime");
        console.log(result.data);
        setData(result.data);
        }
    
        GetAnime();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <CarouselProvider
                naturalSlideWidth={1000}
                naturalSlideHeight={494}
                totalSlides={data.length}
                infinite={true}
                isPlaying={true}
                className="Carousel"
                >
                <Slider className="slider">
                    {data.map((o, i) => 
                        <MySlide
                            bgimage={o.img_url}
                            titletext={o.title}
                            desctext={o.synopsis}
                            bottext="Your pog anime"
                            curEp="21"
                            totEp={o.episodes}
                            slideIndex={i}
                            key={i}
                        />
                    )}
                </Slider>
            </CarouselProvider>
        </Container>
    )
}

export default MainContentSlider;