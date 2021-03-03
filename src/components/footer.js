import React from 'react';
import {Toggle} from './toggleini';
import CobaReducer from './useReducer';
import CobaReducer2 from './useReducer2';
function Footer(params) {

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Footer</h1>
      {/* Write our code explorre here */}
      <Toggle/>
      <CobaReducer/>
      <CobaReducer2/>

      

    </div>
    
  )
  
}

export default Footer;
