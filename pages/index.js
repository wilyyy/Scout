import styled from 'styled-components';

import { useTheme } from '../utils/ScoutThemeProvider';
import MainContentSlider from '../components/MainContentSlider';

import AnimeCard from '../components/AnimeCard';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;

  font-family: "Poppins-ExtraLight";
`;

const Home = () => {
  const {theme, setTheme} = useTheme();
  return (
    <Page>
      <button 
        onClick={()=>{setTheme(theme === 'dark' ? 'light' : 'dark')}}
        style={{position: "absolute", right: '2%', top:'2%', width: '100px', height: '50px'}}
      >test</button>
      <MainContentSlider />
    </Page>
  )
}

export default Home;
