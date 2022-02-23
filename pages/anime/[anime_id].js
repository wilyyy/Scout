//New animepage
import {useRouter} from 'next/router';
import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from "axios";

import NavigationBar from "@/components/NavigationBar";
import GlassCard from "@/components/GlassCard";
import SearchBar from "@/components/SearchBar";
import AnimePageCard from "@/components/AnimePageCard";
import AnimePageRecs from '@/components/AnimePageRecs';
import AnimePageRecCard from '@/components/AnimePageRecCard';

const Page = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;

`;

const Error = styled.div`
    width: 100%;
    height: 30vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    margin-top: 130px;
    width: 100%;
    height: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const AnimePage = () => {
    const router = useRouter();
    const {anime_id} = router.query;

    const [data, setData] = useState(null);

    useEffect(()=>{
        if(anime_id){
            const GetAnime = async()=>{
                //get the show and setData to result
                const result = await axios.get("../api/anime", {
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
                    <p>Error - Anime not found</p>
                </Error>
            </Page>
        )
    }

    return (
        <Page>
            <NavigationBar />
            <Content>
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
                <AnimePageRecs 
                    title={data.title}
                    genre={data.genre}
                    img_url={data.img_url}
                    score={data.score}
                    synopsis={data.synopsis}
                    onFavClick={()=>console.log("hello")}
                />
            </Content>
        </Page>
    )
}   

export default AnimePage;