import styled from "styled-components";

import { useTheme } from "@/utils/ScoutThemeProvider";
import { ThemeConfig } from "@/utils/ThemeConfig";

const ButtonCont = styled.div`
    width: 166px;
    height: 49px;
    background-color: ${props=>props.bgcolor};
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props=>props.btncolor};
    font-size: 24;
    font-family: "Poppins";
    font-weight: 400;
    cursor: pointer;
`

const Button = ({

    btnText = "Default",
    onClick = () => {}

}) => {

    const {theme} = useTheme();

    return (
        <ButtonCont onClick={onClick} bgcolor={ThemeConfig[theme].text} btncolor={ThemeConfig[theme].background}>
            {btnText}
        </ButtonCont>
    )
}

export default Button;