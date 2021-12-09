import React, { createContent, useContext, useReducer } from "react";
//prepare the data layer
export const StateContext = createContent();


//warp our app provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (<StateContext.Provider value={useReducer(reducer, initialState)}>{children}
</StateContext.Provider>
);

//Pull info from the data layer 
export const useStateValue = () => useContext(StateContext);

