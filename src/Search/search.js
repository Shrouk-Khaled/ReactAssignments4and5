import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import axiosInstance from './../axiosConfig/axiosConfig.js'
import { useState, useEffect } from 'react';



export default function Search(){
    const [query, setQuery] = useState([]);
    const [result, setResult] = useState([]);

    const searchForMovie=(e)=>{
        setQuery(e.target.value);
        
        axiosInstance
        .get(`movie/popular?api_key=6ba7bc4ac57c8e8d6fbf100751d6a3a8&query=Sing 2`)
        .then((res)=>console.log(res.data))
        .catch((error)=>console.log(error));
    
      }

    return(
        <>
            <div className="mb-3 offset-2 col-8 offset-2 py-3">
                <input type="text" placeholder='Search for movie...' name="name" className="form-control" onChange={(e)=>searchForMovie(e)}/>
            </div> 

            {/* {
                result.length>0 && (
                    <ul className="results">
                        {
                            result.map((movie,index)=>{
                                return(
                                <li key={index}>{movie.original_title}</li>
                                )
                            })
                        }
                    </ul>
                )
            } */}
        </>
    );
}