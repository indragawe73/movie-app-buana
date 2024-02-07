import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate  } from "react-router-dom";

import Header from './../../components/Header';

const MovieDetail = ({ movie, onWatchedToggle }) => {
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const id = searchParams.get("id")
        const movies = JSON.parse(localStorage.getItem('filteredMovies'));
        const filtered = movies.filter(movie =>
            movie.id.toLowerCase().includes(id.toLowerCase())
        );
        setFilteredMovies(filtered[0]);
    }, [searchParams]);
  return (
    <div>
        <Header />
        <div className='wrap-home'>
            <div className='wrap-movieList'>
                <h2>Movie Details</h2>
                {filteredMovies ?
                    <div className='poster-area-detail'>
                        <img src={filteredMovies.img} alt={filteredMovies.id} />
                        <div className='wrap-btn'>
                            <h3>{filteredMovies.id}</h3>
                            <h4>{filteredMovies.text}</h4>
                            <button className='btn-movies' onClick={() => navigate(-1)}>Go Back</button>
                        </div>
                        
                    </div>      
                :null}
            </div>
        </div>
    </div>
  );
};

export default MovieDetail;
