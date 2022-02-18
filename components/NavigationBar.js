import Link from "next/link";
import styled from "styled-components";

import { useTheme } from '../utils/ScoutThemeProvider';

const Container = styled.div`
    width: 100%;
    height: 54px;
    font-family: "Poppins-ExtraLight";
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LinkCont = styled.div`
    width: 15%;
    height: 54px;
    font-family: "Poppins-ExtraLight";
    display: flex;
    justify-content: space-between;
    align-items: center; 
    
    a:hover{
        cursor: pointer;
    }
`;

const NavigationBar = ({onHomeClick, onFavouritesClick}) => {
    const {theme, setTheme} = useTheme();
    return (
        <Container>
            <h1>Scout</h1>
            <LinkCont>
                <a onClick={onHomeClick}>Home</a>
                <a onClick={onFavouritesClick}>Favourites</a>
            </LinkCont>
            {/* gonna make a different button comp for dark mode */}
            <button 
                onClick={()=>{setTheme(theme === 'dark' ? 'light' : 'dark')}}
                style={{width: '100px', height: '50px'}}
            >test</button>
        </Container>
    )
}

export default NavigationBar;