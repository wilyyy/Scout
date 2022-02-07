import styled from 'styled-components';

import { useTheme } from '../utils/ScoutThemeProvider';
import MainContentSlider from '../components/MainContentSlider';
import AnimeCard from '../components/AnimeCard';
import NavigationBar from '../components/NavigationBar';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  font-family: "Poppins-ExtraLight";
`;

const Home = () => {
  return (
    <Page>
      <NavigationBar />
      <MainContentSlider />
    </Page>
  )
}

export default Home;
