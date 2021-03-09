import React from 'react';

export function Todo({todo, dispatch}){
    
        return  (
            
                <div >
                    <span style={{color:todo.complete?'#AAA':'#000'}}>{todo.name}
                        <button onClick={()=>{
                            return dispatch({type:'toggle-todo', payload:{id:todo.id}})
                        }}>Toggle{todo.id}</button>
                        
                        <button onClick={()=>{
                            dispatch({type:'delete', payload:{id:todo.id}})
                        }}>Delete</button>
                    </span>
                </div>
    
            
            )
     

}
    
