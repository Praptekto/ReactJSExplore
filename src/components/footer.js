import React from 'react';
import {Toggle} from './toggleini';
import CobaReducer from './useReducer';
import CobaReducer2 from './useReducer2';
import Memo from './useMemo';
import { PakaiCallback } from './useCallback';
import  Inicontext  from "./useContext";
import {Inicontextminimalize} from './usecontextminimalize/useContextminimalize';
function Footer(params) {

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Footer</h1>
      {/* Write our code explorre here */}
      <Toggle/>
      <CobaReducer/>
      <CobaReducer2/>
      <Memo/>
      <PakaiCallback/>
      <hr/>
      <h1>USE CONTEXT</h1>
      <Inicontext/>
      <hr/>
      <h1>USE CONTEXT Simplified</h1>
      <Inicontextminimalize/>
      <hr/>

      

    </div>
    
  )
   
}

export default Footer;
