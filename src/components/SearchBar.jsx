import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchLocation, setSearchLocation] = useState('');  
    const [sortOption, setSortOption] = useState('best_match');

    const handleClick = (e) => {
        setSortOption(e.currentTarget.value);
        document.querySelectorAll('.filters button').forEach(b => (b.style.border = 'none'));
        e.currentTarget.style.border = '1px solid white';
        };

    const handleTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleLocationChange = (e) => {
        setSearchLocation(e.target.value);
    };

    const handleSubmit = (e) => {
        props.getBusinesses(searchTerm, searchLocation, sortOption);
    };

    return (
        <div className='search-bar'>
            <div className='filters'>
                <button value='best_match' onClick={handleClick}>Best Match</button>
                <button value='rating' onClick={handleClick}>Highest Rated</button>
                <button value='review_count' onClick={handleClick}>Most Reviewed</button>
            </div>
            <div className='inputs'>
                <input name='business' 
                placeholder='Search Keyword' 
                value={searchTerm}
                onChange={handleTermChange}/>
                <input name='location' 
                placeholder='Search Locations' 
                value={searchLocation}
                onChange={handleLocationChange} />
            </div>
            <div className='submit'>
                <button name='submit-button' onClick={handleSubmit}>Search</button>
            </div>
        </div>

    )
}

export default SearchBar;