import { createContext, useReducer } from "react";

const INITIAL_STATE={
    city:undefined,
    dates:[],
    options:{
adult:undefined,
children:undefined,
rooms:undefined
    }
};
export const SearchComponent=createContext(INITIAL_STATE);

const SearchReducer=(state,action)=>{
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return INITIAL_STATE;
        default:
            return state;
    }
}

export const SearchProvider=({children})=>{
    const [state,dispatch]=useReducer(SearchReducer,INITIAL_STATE);
return (
    <SearchComponent.Provider value={{city:state.city,dates:state.dates,options:state.options,dispatch}}>
        {children}
    </SearchComponent.Provider>
)
}