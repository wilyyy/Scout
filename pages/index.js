import styled from 'styled-components';

import { useTheme } from '../utils/ScoutThemeProvider';
import MainContentSlider from '../components/MainContentSlider';

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
      <MainContentSlider />
    </Page>
  )
}

export default Home;
