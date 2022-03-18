import styled from "styled-components";

import { useTheme } from "@/utils/ScoutThemeProvider";
import { ThemeConfig } from "@/utils/ThemeConfig";

const ButtonCont = styled.div`
    width: ${props=>props.btnwidth};
    height: ${props=>props.btnheight};
    background-color: ${props=>props.bgcolor};
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props=>props.btncolor};
    font-size: ${props=>props.btnsize};
    font-family: "Poppins";
    font-weight: ${props=>props.btnweight};
    cursor: pointer;
    margin: ${props=>props.btnmargin};
`

const Button = ({

    btnText = "Default",
    onClick = () => {},
    btnwidth = '166px',
    btnheight = '49px',
    btnmargin = '0px',
    btnweight = '400',
    btnsize = '24'

}) => {

    const {theme} = useTheme();

    return (
        <ButtonCont 
            onClick={onClick} 
            bgcolor={ThemeConfig[theme].text} 
            btncolor={ThemeConfig[theme].background}
            btnwidth={btnwidth}
            btnheight={btnheight}
            btnmargin={btnmargin}
            btnweight={btnweight}
            btnsize={btnsize}
            >
            {btnText}
        </ButtonCont>
    )
}

export default Button;