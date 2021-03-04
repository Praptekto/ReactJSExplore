import React, { useEffect, useMemo, useState } from 'react';

export default function  Memo() {

    const [number, setNumber]=useState(0);
    const [dark, setDark]=useState(false);
    
    
    const doublenumber=useMemo(()=>{
        return slowfunction(number);
    },[number])

    const themeStyles=useMemo(()=>{
        return {
            backgroundColor: dark? 'black' : 'white',
            color: dark ? 'white':'black'
        }
    },[dark])
    

    useEffect(() => {
        console.log("mantap");//saat kita pakai usememo di themestyles, maka console tidak akan terprint saat render ulang,INGAT THEMESTYLES ITU OBJECT, PERLAKUANYA BEDA
        return () => {
            
        }
    }, [themeStyles])


    return(
        <>
            <input type={"text"} 
            value={number}
            onChange={(e)=>{
                return setNumber(parseInt(e.target.value));
            }}
            />
            <button onClick={()=>setDark((prevdark=>!prevdark))}>  change theme </button>
            {/* keluaran angka */}
            <div style={themeStyles}>{doublenumber}</div>
        </>
    )
}

function slowfunction(number){
    for (let i=0;i<=1000000;i++){}
    return number*2;
}