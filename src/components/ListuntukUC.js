import React, { useEffect, useState } from 'react'

export function ListuntukUC({getItems}) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        setItems(getItems());
        console.log('Updating Items')

        return () => { }
    }, [getItems])
    return   items.map((item)=><div key={item}>{item}</div>)
        
    
}


