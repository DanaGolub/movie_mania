import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from "./AppReducer";

//initial state

const initialState = {
    favourites: localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : [],
};


// create context
export const GlobalContext = createContext(initialState);


// provider component
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(state.favourites))
    }, [state]);

//actions
const addMovieToFavs = movie => {
    dispatch({ type: "ADD_MOVIE_TO_FAVOURITES", payload: movie })
}
const removeMovieFromFavs = movie => {
    dispatch({ type: "REMOVE_MOVIE_FROM_FAVOURITES", payload: movie.id })
}

return (
    <GlobalContext.Provider value={{favourites: state.favourites, addMovieToFavs, removeMovieFromFavs}}>
        {props.children}
    </GlobalContext.Provider>
)
};