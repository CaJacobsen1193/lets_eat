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

    return (
        <div className='search-bar'>
            <div className='filters'>
                <button value='Best Match' onClick={handleClick}>Best Match</button>
                <button value='Highest Rated' onClick={handleClick}>Highest Rated</button>
                <button value='Most Reviewed' onClick={handleClick}>Most Reviewed</button>
            </div>
            <div className='inputs'>
                <input name='business' placeholder='Seach Businesses'/>
                <input name='location' placeholder='Search Locations' />
            </div>
            <div className='submit'>
                <button name='submit-button'>Search</button>
            </div>
        </div>

    )
}

export default SearchBar;