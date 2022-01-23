import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

//interseptor --> l bawaba bta3t ai request
//use( fun(config), fun(error))
// axiosInstance.interceptors.request.use(function(config){
//     config.params={};
//     config.headers={};

//     return config;
// }, function(error){
//     return Promise.reject(error);
// })

export default axiosInstance;