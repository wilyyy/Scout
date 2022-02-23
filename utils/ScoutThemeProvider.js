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
    setSortType: ()=>{}

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

    return (
        <MyContext.Provider value={{
            theme, setTheme,
            genre, setGenre,
            score, setScore,
            episodes, setEpisodes,
            sortKey, setSortKey,
            sortType, setSortType
            }}>
            <style jsx global>
                {`
                    body {
                        background-color:${ThemeConfig[theme].background};
                        color: ${ThemeConfig[theme].text};
                        transition: all 0.35s linear;
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
}


