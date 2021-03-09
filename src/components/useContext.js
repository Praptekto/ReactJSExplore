import React, { useState } from 'react';
import {FunctionuseContext} from './functionC.useContext';
import {ClassCuseContext} from './classC.useContext';


export const ThemeContext=React.createContext();

export default function Inicontext(){
    const [DarkTheme, setDarkTheme] = useState(true);

    function toggleTheme(){
        setDarkTheme(prevDarkTheme=>!prevDarkTheme)

    }


    return(
        <>
            <ThemeContext.Provider value={DarkTheme}>
                <button onClick={toggleTheme}>Toggle Theme</button>

                <FunctionuseContext/>
                <ClassCuseContext/>
            </ThemeContext.Provider>
        </>
    )
}

