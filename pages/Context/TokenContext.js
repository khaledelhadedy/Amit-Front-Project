// import { createContext , useState } from "react";

// export let tokenContext = createContext()
// export default function TokenContextProvider(props){

// const [token, setToken] = useState(null)

//     return <tokenContext.Provider value = {{token , setToken}}>
// {props.children}
//     </tokenContext.Provider>
// }

import React, { createContext, useState } from 'react';

// Create context
export const tokenContext = createContext();

// Create provider
export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <tokenContext.Provider value={{ token, setToken }}>
      {children}
    </tokenContext.Provider>
  );
};

