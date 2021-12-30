export default (state, action) => {
    switch (action.type) {

        case "ADD_MOVIE_TO_FAVOURITES":
            return {
                ...state,
                favourites: [action.payload, ...state.favourites]
            };

        case 'REMOVE_MOVIE_FROM_FAVOURITES':
            const updatedFavourites = state.favourites.filter(movieObj => movieObj.id !== action.payload);
            return updatedFavourites;

        default:
            return state;
    }
}