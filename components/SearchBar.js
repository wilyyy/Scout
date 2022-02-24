import styled from "styled-components";
import { SearchAlt } from "styled-icons/boxicons-regular";
import { useState } from "react";

import { useTheme } from '../utils/ScoutThemeProvider';
import { ThemeConfig } from "../utils/ThemeConfig";
import SearchDropDown from "./SearchDropDown";

import { useSearch } from "../utils/ScoutThemeProvider";

// Search Bar stuff
const Container = styled.div`
    width: 250px;
    height: 45px;
    background-color: rgba(196, 196, 196, 0.1);
    border-radius: 15px;
    backdrop-filter: blur(6px) saturate(164%);
    -webkit-backdrop-filter: blur(9px) saturate(164%);
    border: 1px solid #C5C5C5;
    display: flex;
    align-items: center;
    padding: 2px 0 2px 15px;
    z-index: 2;
`;

const Icon = styled(SearchAlt)`
    width: 25px;
    height: 25px;
    position: absolute;
    right: 5%;
    top: 23%;
    cursor: pointer;
`;

const Input = styled.input`
    width: 175px;
    height: 30px;
    border-style: none;
    background: none;
    color: ${props=>props.color};

    :focus{
        outline: none;
    }
`;
const test = [
    "Made in Abyss",
    "My Hero Academia",
    "Berserk",
    "evangelion",
    "violet evergarden"
]

const SearchBar = ({
    onSearchClick,
    onChange = () => {}
}) => {
    const { theme } = useTheme();
    const {search, setSearch} = useSearch();
    
    return (
        <Container>
            <Input 
                placeholder={"Search"}
                color={ThemeConfig[theme].text}
                onChange = {onChange}
            />
            <Icon onClick={onSearchClick}/>
            {search !== null &&
                <SearchDropDown>
                    {test.map((o, i)=>
                        <div key={i}>{o}</div> //make styled comp for this
                    )}
                </SearchDropDown>
            }
        </Container>
    )
}

export default SearchBar;