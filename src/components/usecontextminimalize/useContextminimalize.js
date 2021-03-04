import React from 'react';
import {FunctionuseContext} from './functionuseContextMinimalize';
import {ThemeProvider} from './ThemeContext';
 //YANG PENGEN MANGGIL
export function Inicontextminimalize(){
    return(
        <>
            <ThemeProvider>
                <FunctionuseContext/>
            </ThemeProvider>
        </>
    )
}

