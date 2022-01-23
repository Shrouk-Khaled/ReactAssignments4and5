export default function moviesShowReducer(state = [], action){
    switch (action.type) {
        case "SHOW_MOVIE":
           return  action.payload
        default: 
            return state
    }
}