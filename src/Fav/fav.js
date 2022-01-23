import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import axiosInstance from './../axiosConfig/axiosConfig.js'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faVoicemail,faHeart} from "@fortawesome/free-solid-svg-icons";
import { delMovieID, saveMovieID } from '../store/actions/actionID';
import { delMovie } from '../store/actions/action.js';


export default function Favourite() {
    const favMovies = useSelector((state) => state.movieFavCount.movieFav)
    const moviesIds = useSelector((state)=> state.movieID.ids)
    const dispatch = useDispatch();

    function removeFav(e){
        // const listFilter = moviesIds.filter(i => i !== e.target.id)
        // dispatch(delMovieID(listFilter));

        //test for save remove id
        for(var i in moviesIds){
            if(moviesIds[i] == e.target.id){
                var saved = i;
            }
        }
        const listFilter = moviesIds.filter(i => i !== e.target.id)
        dispatch(delMovieID(listFilter));

        const filterMovies = [];
        for(var i in favMovies){
            if(i != saved){
                filterMovies.push(favMovies[i])
            }
        }
        dispatch(delMovie(filterMovies))
        // axiosInstance
        // .get(`movie/${e.target.id}`,{
        //     params: {
        //         api_key: `6ba7bc4ac57c8e8d6fbf100751d6a3a8`,
        //       }
        // })
        // .then((res) => {
        //     const filterMovies = favMovies.filter(i => i !== res.data)
        //     dispatch(delMovie(filterMovies))
        // })
        // .catch((err) => console.log(err));
      
    }
    return (
        <>
            <p>Favourite Movies</p>
            {
                <div className='row protofDiv p-3'>
                    {
                        favMovies.map((movie) => {
                            return (
                                <div className='dynamic-card card-shadow col-3  text-center ' key={movie.id}>
                                    <div className='colorDiv my-2 '>
                                        <div className="card-body testDiv p-0" id={movie.id}>
                                            <img className="imgStyle" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                            <h6 className='text-Div'>{movie.original_title}</h6>
                                            <p className='m-3'>Rating: {movie.vote_average}</p>
                                            {/* <Link className='text-Div text-success' to={`/MovieDetails/${movie.id}`}>Show Details</Link> */}
                                            <Button id={movie.id} className="btn btn-danger mx-5" onClick={(event)=>removeFav(event)}>Remove</Button>
                                            

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>

            }
        </>
    );
};