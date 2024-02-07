import React from 'react';

const Header = ({ searchTerm, setSearchTerm, home }) => {
  return (
    <div className='wrap-header'>
        <div className='header-area'>
            <h1>Logo Movie</h1>
            {home ?
                <input 
                    className='search-box'
                    type="text"
                    placeholder="Search movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            :null}
        </div>
    </div>
  );
};

export default Header;