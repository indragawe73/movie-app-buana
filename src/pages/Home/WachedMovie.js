import React from 'react';
import { useNavigate } from "react-router-dom";

const WachedMovie = ({ movies, onWatchedToggle }) => {
  const navigate = useNavigate();

  const goDetail = (val) => {
    navigate(`/detail?id=${val}`);
  }
  return (
    <div className='wrap-movieList'>
      <h2>Watched Movies</h2>
      {movies ?
        <ul className='movie-list'>
            {movies.map((movie, index) => (
            <li key={movie.id}>
                <div className='poster-area'>
                    <img src={movie.img} alt={movie.id} />
                    <div className='wrap-btn'>
                        <h3>{movie.id}</h3>
                        <button className='btn-movies' onClick={() => onWatchedToggle(movie)}>Delete</button>
                        <button  className='btn-movies-detail' onClick={() => goDetail(movie.id)}>Detail</button>
                    </div>
                    
                </div>
            </li>
            ))}
        </ul>
      :null}
    </div>
  );
};

export default WachedMovie;