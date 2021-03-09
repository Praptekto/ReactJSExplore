import React from 'react';
import { useTheme,useThemeUpdate } from "./ThemeContext";

//YANG PENGEN MENGGUKAN THEMECONSTEXT
export function FunctionuseContext() {
    const dark=useTheme();
    const toggletheme=useThemeUpdate();

    
    const style={
        backgroundColor: dark? '#333':'#CCC',
        color: dark? '#CCC':'#333',
        padding : '2rem',
        margin:'2rem'
     }
    return (
        <>
            <button onClick={toggletheme}> Toggle Theme</button>
            <div style={style}>INI FUNCTION</div>
        </>
    )
}
