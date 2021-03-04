import React, { useContext } from 'react';
import { ThemeContext } from './useContext';

export function FunctionuseContext() {
    const dark = useContext(ThemeContext)
    const style={
        backgroundColor: dark? '#333':'#CCC',
        color: dark? '#CCC':'#333',
        padding : '2rem',
        margin:'2rem'
     }
    return (
        <div style={style}>
            INI FUNCTION
        </div>
    )
}
