import styled from 'styled-components';

import { useTheme } from '../utils/ScoutThemeProvider';

import AnimeCard from '../components/AnimeCard';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Poppins-ExtraLight";
`;

const Home = () => {
  const {theme, setTheme} = useTheme();
  return (
    <Page>
      <AnimeCard />
    </Page>
  )
}

export default Home;
