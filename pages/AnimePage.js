// change to make this dynamic later ([animeID].js)
import styled from "styled-components";

import NavigationBar from "../components/NavigationBar";

const Page = styled.div`
    width: 100vw;
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
        </Page>
    )
}   

export default AnimePage;