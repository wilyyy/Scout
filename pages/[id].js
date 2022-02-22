//New animepage
import {useRouter} from 'next/router';
import styled from "styled-components";

import NavigationBar from "../components/NavigationBar";
import GlassCard from "../components/GlassCard";
import SearchBar from "../components/SearchBar";
import AnimePageCard from "../components/AnimePageCard/AnimePageCard";
import AnimePageRecCard from "../components/AnimePageRecCard/AnimePageRecCard";

const Page = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const AnimePage = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <Page>
            <NavigationBar />
            <AnimePageCard />
            <AnimePageRecCard title="Bleach" genres="Action, Mystery" onFavClick={()=>console.log("hi")}/>
        </Page>
    )
}   

export default AnimePage;