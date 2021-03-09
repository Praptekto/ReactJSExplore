// useMemo: Returns and stores the calculated value of a function in a variable
// useCallBack: Returns and stores the actual function itself in a variable

//{{{{{{{{{{{{{{catatan penting sebelum penambahan useCallback}}}}}}}}}}}}}}
//saat kita klik toggle maka {ListuntukUC} akan mengkonsole ('Updating Items')
//atau dalam kata lain function "getItems" seperti terpanggil kembali,
//hal ini dikarenakan saat kita mengklik toggle, maka akan re render dan..
//.. fungsi "getItems" seakan akan fungsi baru,..
//.. maka Usecallback di {ListuntukUC} akan tertrigger dan akan mengkonsole ('Updating Items'),MESKI AKTUAL NUMBERNYA TDAK BERUBAH


//DISINI uSEcALLBAK KITA HANYA TERPENGARUH NUMBER
import React, { useCallback, useState } from 'react';
import { ListuntukUC } from './ListuntukUC';


export function PakaiCallback(){

    const[dark, setDark] = useState(false);
    const [number, setNumber] = useState(1);
    const getItems= useCallback(
        ()=> {
            return [number,number+1, number+2];        
        
        },
        [number],
    )
    const theme={
        backgroundColor:dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }



    return(
        <div style={theme}>
            <input type={"text"} value={number} onChange={(e)=>setNumber(parseInt(e.target.value))}/>
            <button onClick={()=>setDark((prevdark)=>!prevdark)}>
                Toggle theme
            </button>
            <ListuntukUC getItems={getItems}/>

        </div>
    )
}

