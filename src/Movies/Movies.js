import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom'
import saveMovie from '../store/actions/action'
import axiosInstance from './../axiosConfig/axiosConfig.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faVoicemail, faHeart } from "@fortawesome/free-solid-svg-icons";


import './Movies.css'
import saveMovieID from '../store/actions/actionID';
import showMovie from '../store/actions/movieAction';

export default function Home() {
  // const [Movies, setMovies] = useState([]);
  const [countPage, setcountPage] = useState(1);



  // const count = useSelector((state)=> state.movieFavCount.count);

  const movieFavList = useSelector((state) => state.movieFavCount.movieFav);
  const movieIds = useSelector((state) => state.movieID.ids)
  const Movies = useSelector((state) => state.moviesShow)
  // console.log(`hello ${movieIds.length}`)
  // const [classChange, setClassChange] = useState("text-light");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showMovie(countPage)) //redux-thunk
  }, [countPage]) //countPage




  const perviousFun = (() => {
    let count = countPage;
    if (count != 1) {
      count--;
    }
    setcountPage(count);
  })

  const nextFun = () => {
    let count = countPage;
    count++;
    setcountPage(count)
  }


  const toggleMovie = (e) => {

    if (movieIds.includes(e.target.id)) {
      //  setClassChange("text-light")
    }
    else {
      // setClassChange("text-danger")
      dispatch(saveMovieID(e.target.id));
      axiosInstance
        .get(`movie/${e.target.id}`, {
          params: {
            api_key: `6ba7bc4ac57c8e8d6fbf100751d6a3a8`,
          }
        })
        .then((res) => {
          dispatch(saveMovie(res.data))
        })
        .catch((err) => console.log(err));
    }

  }



  return (
    <>

      <div className='row d-flex py-2 px-3'>
        <Button onClick={() => { perviousFun() }} className='col-1 btn-class'>
          <Link className='linkDiv' to={'#'}>Pervious</Link>
        </Button>
        <Button onClick={() => { nextFun() }} className='col-1 btn-class2'>
          <Link className='linkDiv' to={'#'}>Next</Link>
        </Button>
      </div>




      {
        <div className='row protofDiv p-3'>
          {
            Movies.map((movie) => {


              return (
                <div className='dynamic-card card-shadow col-3 text-center' key={movie.id}>
                  <div className='colorDiv my-2 '>
                    <div className="card-body testDiv p-0" id={movie.id}>
                      <img className="imgStyle" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                      <h6 className='text-Div'>{movie.original_title}</h6>
                      <Link className='text-Div text-success' to={`/MovieDetails/${movie.id}`}>Show Details</Link>
                      <Button id={movie.id} className="btn btn-dark btn-test" onClick={(event) => toggleMovie(event)}> Add to fav </Button>
                      {/* <p id={movie.id}  className={classChange} onClick={()=>toggleFavMovie()}><FontAwesomeIcon icon={faHeart} ></FontAwesomeIcon> </p> */}

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
}