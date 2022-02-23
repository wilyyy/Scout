import styled from "styled-components";
import { useEffect, useState } from "react";
import { Bookmark } from "@styled-icons/bootstrap/Bookmark";
import { BookmarkCheckFill } from "@styled-icons/bootstrap/BookmarkCheckFill";
import { motion } from "framer-motion";

import { ThemeConfig } from "@/utils/ThemeConfig";
import { useTheme } from "@/utils/ScoutThemeProvider";
import { HoverZoom } from "@/utils/Animations";

const Container = styled(motion.div)`
    width: 200px;
    height: 325px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid #6D7992;
    font-family: Inter, sans-serif;
    font-size: 13px;
`;

const Card = styled.div`
    width: 100%;
    height: 120px;
    background: linear-gradient(152.97deg, ${props=>props.gradient1} 0%, ${props=>props.gradient2} 100%);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 10px;
    box-shadow: inset 43.3333px -43.3333px 43.3333px rgba(149, 149, 149, 0.1), 
              inset -43.3333px 43.3333px 43.3333px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px) saturate(164%);
    -webkit-backdrop-filter: blur(8px) saturate(164%);
`;

const Column = styled.div`
    width: 80%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Text = styled.p`
    ${({title}) => title && `
        font-size: 16px;
    `}
    ${({genres}) => genres && `
        font-size: 13px;
    `}
`;

const BookmarkIcon = styled(Bookmark)`
    width: 20px;
    height: 27px;
`;

const BookmarkCheckIcon = styled(BookmarkCheckFill)`
    width: 20px;
    height: 27px;
`;

const Image = styled.img`
    width: 200px;
    height: 250px;
`;

const AnimePageRecCard = ({
    uid, 
    title, 
    genre=[],
    img_url,
    onFavClick,
    onCardClick=()=>{}
}) => {
    const {theme} = useTheme();
    const [icon, setIcon] = useState(false);
    const [genreFix, setGenreFix] = useState([]);

    useEffect(()=>{
        const AddSpaceToGenre = () => {
            let FinalArray = [];
            genre.forEach((el) => {
                FinalArray.push(el + ", ");
            })
            FinalArray = FinalArray.splice(0, 2);
            setGenreFix(FinalArray);
        }
        AddSpaceToGenre();
    }, [])

    const ClickFav = () => {
        setIcon(!icon);
        onFavClick();
    }
    
    return (
        <Container
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.96}}
            transition={HoverZoom.spring}
            onClick={onCardClick}
        >
            <Image
                src={img_url}
                alt="anime image"
            />
            <Card
                gradient1={ThemeConfig[theme].cardGradient}
                gradient2={ThemeConfig[theme].cardGradient2}
            >
                <Column>
                    <Text title>{title}</Text>
                    <Text genres>{genreFix}...</Text>
                </Column>
                <div onClick={ClickFav}>
                    {icon === false ? (
                        <BookmarkIcon />
                    ) : (
                        <BookmarkCheckIcon />        
                    )}
                </div>
            </Card>
        </Container>
    )
}

export default AnimePageRecCard;