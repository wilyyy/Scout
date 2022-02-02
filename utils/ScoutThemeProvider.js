import {useContext, createContext, useState} from 'react';

import { ThemeConfig } from './ThemeConfig';

const initialStates = {
    theme: "dark",
    setTheme: ()=>{}
}

const MyContext = createContext(initialStates);

//provider
const ScoutThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(initialStates.theme);

    return (
        <MyContext.Provider value={{theme, setTheme}}>
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
}

