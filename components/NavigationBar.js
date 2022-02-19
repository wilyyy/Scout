import Link from "next/link";
import styled from "styled-components";
import { Switch } from 'antd';
import { SunFill } from '@styled-icons/bootstrap/SunFill';
import { MoonStarsFill } from '@styled-icons/bootstrap/MoonStarsFill';

import { useTheme } from '../utils/ScoutThemeProvider';
import { ThemeConfig } from "../utils/ThemeConfig";

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

const ModeSwitch = styled(Switch)`
    width: 75px;
    height: 40px;
    border-radius: 50px;
`;

const SunIcon = styled(SunFill)`
    width: 35px;
    height: 35px;
    color: ${props=>props.color};
`;

const MoonIcon = styled(MoonStarsFill)`
    width: 35px;
    height: 35px;
    color: ${props=>props.color};
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
            <ModeSwitch 
                unCheckedChildren={<SunIcon color={ThemeConfig[theme].text} />}
                checkedChildren={<MoonIcon color={ThemeConfig[theme].text} />}
                defaultChecked
                onChange={()=>{setTheme(theme === 'dark' ? 'light' : 'dark')}}
            />
        </Container>
    )
}

export default NavigationBar;