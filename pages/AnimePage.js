// change to make this dynamic later ([animeID].js)
import styled from "styled-components";

import NavigationBar from "../components/NavigationBar";
import GlassCard from "../components/GlassCard";
import SearchBar from "../components/SearchBar";
import AnimePageCard from "../components/AnimePageCard";

const Page = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const AnimePage = () => {
    return (
        <Page>
            <NavigationBar />
            <AnimePageCard />
        </Page>
    )
}   

export default AnimePage;