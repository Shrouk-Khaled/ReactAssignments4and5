let intial = {
    ids:[],
}
//(state, action)
export default function movieIDReducer(state=intial, action){
    switch (action.type) {
        case "SAVE_ID":
           return  {
                ...state,
                ids:[action.payload, ...state.ids]
           }

        case "DEL_ID":
        return  {
            ...state,
            ids:action.payload
        }

        default:
            return state;
    }
}