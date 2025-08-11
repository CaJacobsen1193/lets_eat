import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchLocation, setSearchLocation] = useState('');  
    const [sortOption, setSortOption] = useState('Best Match');

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
        console.log(`Searching Yelp with ${searchTerm}, ${searchLocation}, ${sortOption}`)
    };

    return (
        <div className='search-bar'>
            <div className='filters'>
                <button value='best_match' onClick={handleClick}>Best Match</button>
                <button value='highest_rated' onClick={handleClick}>Highest Rated</button>
                <button value='most_reviewed' onClick={handleClick}>Most Reviewed</button>
            </div>
            <div className='inputs'>
                <input name='business' 
                placeholder='Seach Businesses' 
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