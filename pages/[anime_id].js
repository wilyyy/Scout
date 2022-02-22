//New animepage
import {useRouter} from 'next/router';
import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from "axios";

import NavigationBar from "@/components/NavigationBar";
import GlassCard from "@/components/GlassCard";
import SearchBar from "@/components/SearchBar";
import AnimePageCard from "@/components/AnimePageCard";
import AnimePageRecCard from "@/components/AnimePageRecCard";

const Page = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const Error = styled.div`
    width: 100%;
    height: 30vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AnimePage = () => {
    const router = useRouter();
    const {anime_id} = router.query;

    const [data, setData] = useState(null);

    useEffect(()=>{
        if(anime_id){
            const GetAnime = async()=>{
                //get the show and setData to result
                const result = await axios.get("./api/anime", {
                    params: {
                        a_id: anime_id
                    }
                });
                console.log(result);
                if(result.data[0]){
                    setData(result.data[0]);
                }
            }
            GetAnime();
        }
    }, [anime_id])

    if(data === null){
        return (
            <Page>
                <NavigationBar />
                <Error>
                    Can't find this anime
                </Error>
            </Page>
        )
    }

    return (
        <Page>
            <NavigationBar />
            <AnimePageCard 
                uid={data.uid}
                title={data.title}
                synopsis={data.synopsis}
                score={data.score}
                ranked={data.ranked}
                popularity={data.popularity}
                genre={data.genre}
                aired={data.aired}
                episodes={data.episodes}
                img_url={data.img_url}
            />
            <AnimePageRecCard 
                title={data.title} 
                genres={data.genre}
                img_url={data.img_url}
                onFavClick={()=>console.log("hi")} //post to fav list
            />
        </Page>
    )
}   

export default AnimePage;