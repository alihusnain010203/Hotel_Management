import { createContext, useReducer } from "react"
import Darkmodereducer from "./darkmodereducer"

const INITIAL_STATE= {
    darkmode:false
}
export const DarkmodeContext=createContext(INITIAL_STATE)
// eslint-disable-next-line react/prop-types
export const DarkmodeProvider=({children})=>{
    const [state,dispatch]=useReducer(Darkmodereducer,INITIAL_STATE)
    return(
        <DarkmodeContext.Provider value={{darkmode:state.darkmode,dispatch}}>{children}</DarkmodeContext.Provider>
    )
}