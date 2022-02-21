import styled from 'styled-components';
import { motion } from "framer-motion";

const MainCont = styled.div`
    display: flex;
    width: 600px;
    height: 500px;
    display: flex;
    backdrop-filter: blur(86.6667px);

    background-color: ${props=>props.backgroundColor};
    font-family: ${props=>props.fontFamily};
`;
const OptionsCont = styled.div`
    display: flex;
`;



const Filter = () => {
    return (
        <MainCont>
            <OptionsCont>
            <h3> Filter By: </h3>
            <h3> Sort By: </h3>
            </OptionsCont>
        </MainCont>
    )
}

export default Filter;