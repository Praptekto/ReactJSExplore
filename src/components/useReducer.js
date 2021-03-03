import React, { useReducer } from 'react';

function  reducer(state,action) {
    switch(action.type){
        case "increment":
            return {count: state.count+1};
        case "decrement":
            return {count: state.count-1};
        default:
            return state; 
    }
    
    }

export default function  CobaReducer() { 
   const [state, dispatch] = useReducer(reducer,{count:0})

   function  increment() {
       dispatch({type:"increment"})
   }
   function  decrement() {
        dispatch({type:"decrement"})
    }


   return(
       <>
        <button onClick={decrement}>
            -
        </button>

        <div>
            {state.count}
        </div>

        <button onClick={increment}>
            +
        </button>
       </>
   )
}