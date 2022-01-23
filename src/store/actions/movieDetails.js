import axiosInstance from './../../axiosConfig/axiosConfig'


export default function showMovieDetails(_id){
    return (dispatch)=>{
        axiosInstance
        .get(`movie/${_id}`,{
            params: {
                api_key: `6ba7bc4ac57c8e8d6fbf100751d6a3a8`,
              }
        })
        .then((res) => dispatch({
            type:"SET_DETAILS",
            payload: res.data
        }))
        .catch((err) => console.log(err));
    }
}