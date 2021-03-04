import React, { useReducer, useState } from 'react';
import {Todo} from './todo';

function  reducer(todos,action) {
    switch(action.type){
        case 'add-todo':
            return [...todos,newTodo(action.payload.name)];
        case 'delete':
            return todos.filter(todo=>{
                return todo.id!==action.payload.id
            })
                
        case 'toggle-todo':
            console.log(action.payload.id)
            return todos.map((todo)=>{
                    if (todo.id===action.payload.id){
                        return {...todo,complete:!todo.complete};
                    }
                    return todo;
                }
            )
            
        default:
            throw("makan");

    }
    
    
}

function newTodo(name) {
    return {id: Date.now() , name:name , complete:false}        
}


// Batas EXPORT
// Batas EXPORT
// Batas EXPORT


export default function  CobaReducer2() { 
    const [todos, dispatch] = useReducer(reducer,[])
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({type:'add-todo', payload:{name:name}})
        setName('');
    }
   return(
       <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e)=>{
                    return setName(e.target.value)
                }}/>
            </form>
            {
                todos.map(todo=>{
                    return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
                })
            }     
        
       </>
   )
}