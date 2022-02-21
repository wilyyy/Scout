import styled from 'styled-components';

import { useTheme } from '../utils/ScoutThemeProvider';
import MainContentSlider from '../components/MainContentSlider';
import NavigationBar from '../components/NavigationBar';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Home = () => {
  return (
    <Page>
      <NavigationBar />
      <MainContentSlider />
      {/* 🐳🐳🐳🐳🐳🐳 willy shit for merge 🐳🐳🐳🐳🐳🐳 */}
    </Page>
  )
}

export default Home;
