import React , { createContext, useState } from "react";

 export let counterContext = createContext();


 
 export default function CounterContextProvider(props){
     const [counter, setcounter] = useState(20)
     return <counterContext.Provider value={counter} >
{props.children}
     </counterContext.Provider>
 }