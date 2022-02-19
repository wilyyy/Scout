import Link from "next/link";
import styled from "styled-components";
import { SunFill } from '@styled-icons/bootstrap/SunFill';
import { MoonStarsFill } from '@styled-icons/bootstrap/MoonStarsFill';
import ReactSwitch from "react-switch";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';

import { useTheme } from '../utils/ScoutThemeProvider';
import { ThemeConfig } from "../utils/ThemeConfig";
import { HoverZoom } from "../utils/Animations";

const Container = styled.div`
    width: 100%;
    height: 75px;
    font-family: "Poppins-ExtraLight";
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h1:hover{
        cursor: pointer;
    }
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
    const router = useRouter();
    const {theme, setTheme} = useTheme();

    return (
        <Container>
            <motion.h1
                whileHover={HoverZoom.hover}
                whileTap={HoverZoom.tap}
                transition={HoverZoom.spring}
                onClick={()=>router.push('/')}
            >
                Scout
            </motion.h1>
            <LinkCont>
                <motion.a 
                    whileHover={HoverZoom.hover}
                    whileTap={HoverZoom.tap}
                    transition={HoverZoom.spring}
                    onClick={onHomeClick}
                >
                    Home
                </motion.a>
                <motion.a 
                    whileHover={HoverZoom.hover}
                    whileTap={HoverZoom.tap}
                    transition={HoverZoom.spring}
                    onClick={onHomeClick}
                >
                    Your List
                </motion.a>
            </LinkCont>
            <ReactSwitch 
                onChange={()=>{setTheme(theme === 'dark' ? 'light' : 'dark')}}
                checked={theme === 'dark' ? false : true}
            />
        </Container>
    )
}

export default NavigationBar;