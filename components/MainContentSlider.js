import styled from "styled-components";
import Image from 'next/image';
import { motion } from "framer-motion";

const Container = styled(motion.div)`
    width: 60vw;
    height: 597px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: "Poppins-ExtraLight";
`;

const ImageCont = styled.div`
    border-radius: 16px;
    overflow: hidden;
`;

//might do this differently
const AnimeInfo = styled.div`
    position: absolute;
    top: 10%;
    width: 50vw;
    height: 197px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    backdrop-filter: blur(10px) saturate(200%);
    -webkit-backdrop-filter: blur(10px) saturate(200%);
    border-radius: 16px;
    background: rgba(196, 196, 196, 0.1);
`;

const Column = styled.div`
    
`


const MainContentSlider = () => {
    return (
        <Container>
            <ImageCont>
                <Image 
                    src="/../public/test_demonslayer.jpg" 
                    width={1188}
                    height={495}
                    objectFit="cover"
                />
                <AnimeInfo></AnimeInfo>
            </ImageCont>
        </Container>
    )
}

export default MainContentSlider;