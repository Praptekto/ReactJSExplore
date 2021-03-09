import React, { useContext, useState } from 'react';

//ALL OF THE INFORMATION OF OUR CONTEXT IS RIGHT HERE, IN THIS ONE SINGLE COMPONENT

const ThemeContext= React.createContext();
const ThemeUpdateContext= React.createContext();

export function useTheme() {
    return useContext(ThemeContext);   
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider({children}){
    const [DarkTheme, setDarkTheme] = useState(true);

    function toggleTheme(){
        setDarkTheme(prevDarkTheme=>!prevDarkTheme)

    }
    return (
        <ThemeContext.Provider value={DarkTheme}>           
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}
