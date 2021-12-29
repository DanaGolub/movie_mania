import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from "./AppReducer";

//initial state

const initialState = {
    favourites: []
};


// create context
export const GlobalContext = createContext(initialState);


// provider component
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


//actions
const addMovieToFavs = movie => {
    dispatch({ type: "ADD_MOVIE_TO_FAVOURITES", payload: movie })
}


return (
    <GlobalContext.Provider value={{favourites: state.favourites, addMovieToFavs}}>
        {props.children}
    </GlobalContext.Provider>
)
};