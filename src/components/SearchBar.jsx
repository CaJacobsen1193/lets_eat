import './SearchBar.css';

function SearchBar() {
    return (
        <div className='search-bar'>
            <div className='filters'>
                <button>Best Match</button>
                <button>Highest Rated</button>
                <button>Most Reviewed</button>
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