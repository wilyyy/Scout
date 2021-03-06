import {useContext, createContext, useState} from 'react';

import { ThemeConfig } from './ThemeConfig';

const initialStates = {
    theme: "dark",
    setTheme: ()=>{},

    genre: [],
    setGenre: ()=>{},

    score: [0, 10],
    setScore: ()=>{},

    episodes: [0, 100],
    setEpisodes: ()=>{},

    sortKey: 'title',
    setSortKey: ()=>{},

    sortType: 'asc',
    setSortType: ()=>{},

    search: '',
    setSearch: ()=>{},

    data: [],
    setData: ()=>{},

    yourList: {},
    setYourList: ()=>{},

    carousel: [],
    setCarousel: ()=>{},

    searchRes: [],
    setSearchRes: ()=>{}

}

const MyContext = createContext(initialStates);

//provider
const ScoutThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(initialStates.theme);
    const [genre, setGenre] = useState(initialStates.genre);
    const [score, setScore] = useState(initialStates.score);
    const [episodes, setEpisodes] = useState(initialStates.episodes);
    const [sortKey, setSortKey] = useState(initialStates.sortKey);
    const [sortType, setSortType] = useState(initialStates.sortType);
    const [search, setSearch] = useState(initialStates.search);
    const [data, setData] = useState(initialStates.data);
    const [yourList, setYourList] = useState(initialStates.yourList);
    const [carousel, setCarousel] = useState(initialStates.carousel);
    const [searchRes, setSearchRes] = useState(initialStates.searchRes);

    console.log("your list", yourList);
    return (
        <MyContext.Provider value={{
            theme, setTheme,
            genre, setGenre,
            score, setScore,
            episodes, setEpisodes,
            sortKey, setSortKey,
            sortType, setSortType,
            search, setSearch,
            data, setData,
            yourList, setYourList,
            carousel, setCarousel,
            searchRes, setSearchRes
        }}>
            <style jsx global>
                {`
                    body {
                        background-color:${ThemeConfig[theme].background};
                        color: ${ThemeConfig[theme].text};
                        transition: all 0.35s linear;
                        background-image: url(data:image/png;base64,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);
                    }
                `}
            </style>
            {children}
        </MyContext.Provider>
    )
}

export default ScoutThemeProvider;

//hook
export const useTheme = () => {
    const {theme, setTheme} = useContext(MyContext);
    return {theme, setTheme};
};

export const useGenre = () => {
    const {genre, setGenre} = useContext(MyContext);
    return {genre, setGenre};
};

export const useScore = () => {
    const {score, setScore} = useContext(MyContext);
    return {score, setScore};
};

export const useEpisodes = () => {
    const {episodes, setEpisodes} = useContext(MyContext);
    return {episodes, setEpisodes};
};

export const useSortKey = () => {
    const {sortKey, setSortKey} = useContext(MyContext);
    return {sortKey, setSortKey};
};

export const useSortType = () => {
    const {sortType, setSortType} = useContext(MyContext);
    return {sortType, setSortType};
};

export const useSearch = () => {
    const {search, setSearch} = useContext(MyContext);
    return {search, setSearch};
};

export const useData = () => {
    const {data, setData} = useContext(MyContext);
    return {data, setData};
};

export const useYourList = () => {
    const {yourList, setYourList} = useContext(MyContext);
    return {yourList, setYourList};
};

export const useCarousel = () => {
    const {carousel, setCarousel} = useContext(MyContext);
    return {carousel, setCarousel};
};

export const useSearchRes = () => {
    const {searchRes, setSearchRes} = useContext(MyContext);
    return {searchRes, setSearchRes};
}


