import React from 'react'
import { GlobalStateContext } from '../context/Context';


export const GlobalState = (props) => {

    return (
        <GlobalStateContext.Provider
            value={{}}
        >
            {props.children}     
        </GlobalStateContext.Provider>
    );
};