import Image from 'next/image';
import styled from 'styled-components';

import { useTheme } from '../utils/ScoutThemeProvider';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
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
      asdsad
    </Page>
  )
}

export default Home;
