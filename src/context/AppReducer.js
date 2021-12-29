export default (state, action) => {
    switch(action.type) {

        case "ADD_MOVIE_TO_FAVOURITES":
            return {
                ...state,
                favourites: [action.payload, ...state.favourites]
            }
        default: 
        return state;
    }
}