import styled from "styled-components";
import { SearchAlt } from "styled-icons/boxicons-regular";

import { useTheme } from '../utils/ScoutThemeProvider';
import { ThemeConfig } from "../utils/ThemeConfig";

import { useSearch } from "../utils/ScoutThemeProvider";

import axios from 'axios';
import qs from 'qs';
import {useEffect} from 'react';
import { useRouter } from 'next/router';
import { useSearchRes } from "../utils/ScoutThemeProvider";

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

const DropdownCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    right: 0;
    top: 100%;
    width: 250px;
    height: auto;
    background-color: ${props=>props.ddcolor};
    padding: 10px;
    z-index: 2;
`;

const DropdownList = styled.div`
    text-align: center;
    cursor: pointer;
`


const test = [
    "Made in Abyss",
    "My Hero Academia",
    "Berserk",
    "evangelion",
    "violet evergarden"
]

const SearchBar = ({
    onSearchClick,
    onChange = () => {},
    onSearchResClick = () => {}
}) => {
    const { theme } = useTheme();
    const {search, setSearch} = useSearch();

    const router = useRouter();
    const {searchRes, setSearchRes} = useSearchRes();

    const onSearch = async (txt) => {
        setSearch(txt)
        const result = await axios.get("/api/anime", {
            params: {
                txt: txt,
                origin: 'dropdownlist'
            },

            paramsSerializer: params => {
            
                return qs.stringify(params, { arrayFormat: "repeat"})
            }
        });
        
        console.log(result.data);
        setSearchRes(result.data);
    }

    const SearchClick = (o) => {
        router.push(`./anime/${o.uid}`)
        setSearch('');
    }
    
    return (
        <Container>
            <Input 
                placeholder={"Search"}
                color={ThemeConfig[theme].text}
                onChange = {(e)=>{onSearch(e.target.value)}}
            />
            <Icon onClick={onSearchClick}/>
            {search != '' &&
                <DropdownCont ddcolor={ThemeConfig[theme].background}>
                    {searchRes.map((o, i)=>
                        <DropdownList 
                        key={i}
                        onClick={()=>SearchClick(o)}>{o.title} <br /> -----------------------------
                        </DropdownList> //make styled comp for this
                    )}
                </DropdownCont>
            }
        </Container>
    )
}

export default SearchBar;