import styled from 'styled-components';
import { useTheme } from '../utils/ScoutThemeProvider';
import { ThemeConfig } from '../utils/ThemeConfig';

const MainCont = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 50px;
    width: 600px;
    height: 500px;
    background-color: ${props=>props.backgroundColor};
    font-family: ${props=>props.fontFamily};
`;
const OptionsCont = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
    width: 100%;
`;
const Header = styled.h3`
    font-size: 22px;
    color: ${props=>props.headerColor};
    font-weight: 400;
`
const FilterCont = styled.div`
    display: flex;
    flex-direction: column;

`
const Options = styled.h4`
    font-size: 18px;
    color: ${props=>props.headerColor};
    font-weight: 400;
`
const 


const FilterModal = ({
    fontFamily = "Inter",
    cardFilter = "Filter By:",
    cardSort = "Sort By:"
}) => {

    const { theme } = useTheme();

    return (
        <MainCont backgroundColor={ThemeConfig[theme].cardBackground} fontFamily={fontFamily}>
            <OptionsCont>
                <Header headerColor={ThemeConfig[theme].cardHeader}>{cardFilter}</Header>
                <Header headerColor={ThemeConfig[theme].cardHeader}>{cardSort}</Header>
            </OptionsCont>
            <FilterCont>
                <Options> </Options>
            </FilterCont>

        </MainCont>
    )
}

export default FilterModal;