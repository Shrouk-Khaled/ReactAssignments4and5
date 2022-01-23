export default function saveMovieID(data){
    
    return{
        type: "SAVE_ID",
        payload: data
    }


}


export function delMovieID(data){
    
    return{
        type: "DEL_ID",
        payload: data
    }


}

