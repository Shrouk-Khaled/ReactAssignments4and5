import {combineReducers} from 'redux'
import movieDetailsReducer from './reducers/movieDetails'
import moviesShowReducer from './reducers/movieReduce'
import movieReducer from './reducers/reducer'
import movieIDReducer from './reducers/reducerID'

export default combineReducers({
    movieFavCount: movieReducer,
    movieID: movieIDReducer,
    moviesShow: moviesShowReducer,
    movieDetails: movieDetailsReducer
    
})
