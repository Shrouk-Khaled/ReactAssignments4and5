import axiosInstance from './../../axiosConfig/axiosConfig'


export default function showMovie(_page){
    
    return(dispatch)=> {
        axiosInstance
        // .get(`movie/popular?api_key=6ba7bc4ac57c8e8d6fbf100751d6a3a8&`) //page=${countPage}
        .get(`movie/popular`,{
            params: {
                api_key: `6ba7bc4ac57c8e8d6fbf100751d6a3a8`,
                page: _page
              }
        })
        .then((res) => dispatch({
            type: "SHOW_MOVIE",
            payload: res.data.results
        }))
        .catch((err) => console.log(err))
    }


}