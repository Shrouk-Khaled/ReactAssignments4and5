let intial = {
    movieFav:[],
}
//(state, action)
export default function movieReducer(state=intial, action){
    switch (action.type) {
        case "SAVE_MOVIE":
           return  {
                ...state,
                movieFav:[action.payload, ...state.movieFav]
           }

        case "DEL_MOVIE":
        return  {
                ...state,
                movieFav: action.payload
        }

        default:
            return state;
    }
}