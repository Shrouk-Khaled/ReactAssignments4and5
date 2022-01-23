export default function saveMovie(data){
    
    return{
        type: "SAVE_MOVIE",
        payload: data
    }


}


export  function delMovie(data){
    
    return{
        type: "DEL_MOVIE",
        payload: data
    }


}
