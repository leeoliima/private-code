import React from 'react'
import { Router } from "../src/routers/Router"
import { GlobalState } from './global/GlobalState';
import { GlobalStyles } from './global/styled';


export const App = () =>  {
  return (
    <div>
      <GlobalStyles />
      <GlobalState>       
          <Router />        
      </GlobalState>
    </div>
  );
}

