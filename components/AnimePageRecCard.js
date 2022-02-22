import Image from "next/image";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Bookmark } from "@styled-icons/bootstrap/Bookmark";
import { BookmarkCheckFill } from "@styled-icons/bootstrap/BookmarkCheckFill";

const Container = styled.div`
    width: 200px;
    height: 325px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    overflow: hidden;
`;

const Card = styled.div`
    width: 100%;
    height: 120px;
    background-color: #000;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 2px;
`;

const Column = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const BookmarkIcon = styled(Bookmark)`
    width: 20px;
    height: 27px;
`;

const BookmarkCheckIcon = styled(BookmarkCheckFill)`
    width: 20px;
    height: 27px;
`;

const Testimg = styled.img`
    width: 200px;
    height: 250px;
`;

const AnimePageRecCard = ({
    uid, 
    title, 
    genres,
    img_url,
    onFavClick
}) => {
    const [icon, setIcon] = useState(false);
    const [firstTwoGenres, setFirstTwoGenres] = useState(genres);

    //once genre parse works, use this func
    // useEffect(()=>{
    //     let splicedGenres = [];
    //     const SpliceGenres = () => {
    //         splicedGenres = firstTwoGenres.splice(0, 2);
    //         setFirstTwoGenres(splicedGenres);
    //     }
    //     SpliceGenres();
    // }, [])

    const ClickFav = () => {
        setIcon(!icon);
        onFavClick();
    }
    
    return (
        <Container>
            <Testimg
                src={img_url}
                alt="anime image"
            />
            <Card>
                <Column>
                    {title}
                    <br />
                    {genres} 
                </Column>
                <div onClick={ClickFav}>
                    {icon === false ? (
                            <BookmarkIcon />
                        ) : (
                            <BookmarkCheckIcon />        
                        )
                    }
                </div>
            </Card>
        </Container>
    )
}

export default AnimePageRecCard;