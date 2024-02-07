import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import WachedMovie from './WachedMovie';
import Header from './../../components/Header';

import { options } from './../../hooks/useFetch';

import './Home.scss';

// import RatingComponent from './RatingComponent';
// import CommentComponent from './CommentComponent';


const App = () => {
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [movies, setMovies] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => { syncWithServer();
    const storedWatchedMovies = JSON.parse(localStorage.getItem('watchedMovies'));
    if (storedWatchedMovies) {
      setWatchedMovies(storedWatchedMovies);
    }
  }, []);

  useEffect(() => {
    // Check if the network is online/offline
    const handleNetworkChange = () => {
      if (window.navigator.onLine) {
        // If network is online, synchronize data with the server
        syncWithServer();
        const storedWatchedMovies = JSON.parse(localStorage.getItem('watchedMovies'));
        if (storedWatchedMovies) {
          setWatchedMovies(storedWatchedMovies);
        }
      } else {
        const storedFilteredMovies = JSON.parse(localStorage.getItem('filteredMovies'));
        const storedWatchedMovies = JSON.parse(localStorage.getItem('watchedMovies'));
        
        if (storedWatchedMovies) {
          setWatchedMovies(storedWatchedMovies);
        }
        if (storedFilteredMovies) {
          setFilteredMovies(storedFilteredMovies);
        }
      }
    };

    window.addEventListener('online', handleNetworkChange);

    return () => {
      window.removeEventListener('online', handleNetworkChange);
    };
  }, []);

  const handleWatchedToggle = (item, add) => {
    const isWatched = watchedMovies.some(movie => movie.id === item.id);
    if (isWatched) {
      if(!add) {
        setWatchedMovies(prevMovies => prevMovies.filter(movie => movie.id !== item.id));
      }
    } else {
      const movieToAdd = { link: item.link, text: item.text, img: item.img, id: item.id };
      setWatchedMovies(prevMovies => [...prevMovies, movieToAdd]);
      localStorage.setItem('watchedMovies', JSON.stringify([...watchedMovies, movieToAdd]));
    }
  };

  const syncWithServer = () => {
    options().then(function(result) {
      setMovies(result);
      localStorage.setItem('filteredMovies', JSON.stringify(result));
    })
    
  }

  useEffect(() => {
    if(movies) {
      const filtered = movies.filter(movie =>
        movie.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [searchTerm, movies]);

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} home={true}/>
      <div className='wrap-home'>
        {watchedMovies && <WachedMovie movies={watchedMovies} onWatchedToggle={handleWatchedToggle} /> }
        {filteredMovies && <MovieList movies={filteredMovies} onWatchedToggle={handleWatchedToggle} /> }
      </div>
    </>
  );
};

export default App;
