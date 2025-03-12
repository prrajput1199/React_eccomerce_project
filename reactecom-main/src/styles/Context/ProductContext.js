//Create a context'
//Provider
///Consumer=>usecontext Hook

import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider=({children})=>{
    return <AppContext.Provider value={{myName: "Pratik"}}>{children}</AppContext.Provider>
}

// custom hooks
const useProductContext=()=>{
    return useContext(AppContext);
  }

export {AppContext,AppProvider, useProductContext};