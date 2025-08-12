const yelpApi = YOUR_API_KEY_HERE
const yelpBaseUrl = 'https://api.yelp.com/v3';

async function searchBusinesses(searchTerm, searchLocation, sortOption) {
    const searchBusinessEndpoint = '/businesses/search';
    const corsBypass = 'https://cors-anywhere.herokuapp.com/';
    const urlToFetch = `${corsBypass}${yelpBaseUrl}${searchBusinessEndpoint}?term=${searchTerm}&location=${searchLocation}&sort_by=${sortOption}`;
    try {
        const response = await fetch(urlToFetch, {
            headers: { Authorization: `Bearer ${yelpApi}`}
        }); 
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
    }catch (error) {
        console.log(error)
    }
}

export default searchBusinesses;