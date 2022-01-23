import { useParams } from "react-router-dom"
import {useState} from 'react'
import {useEffect} from 'react'
import React from 'react'
import './../Movies/Movies.css'
import axiosInstance from './../axiosConfig/axiosConfig.js'
import { useSelector, useDispatch } from 'react-redux';
import showMovieDetails from './../store/actions/movieDetails';


// import axios from 'axios'

const MovieDetails = ()=>
{
    const params = useParams();
    // const[MovieDetails, setMovieDetails] = useState({});
    const MovieDetails = useSelector((state)=> state.movieDetails)
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(showMovieDetails(params.id))
    },[])
    // console.log(params.id);
    return(
        <div className="row">
            <div className="border-Class offset-2 col-8 d-flex offset-1 p-3 my-3">
                <div className="col-6 ">
                    <img className="imgStyle2" src={`https://image.tmdb.org/t/p/w500/${MovieDetails.poster_path}`}/>
                </div>
                <div className="col-6 p-5">
                    <h3>{MovieDetails.original_title}</h3>
                    <small>{MovieDetails.overview}</small>
                    <h5>Rating: {MovieDetails.vote_average}</h5>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;