import React from 'react';
import { createBrowserHistory } from 'history';
import { HashRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail'

const history = createBrowserHistory();

const App = () => {
  return (
      <HashRouter history={history}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<MovieDetail />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
