const yelpApi = 'Id4ASZyvyGRcjGto9oHFApHs3fuvay_tlk-Q4tD1Sofdgs_DLZL3KFSZuXZHGODZ6i1x4VtFw2Q2X9hc0H1iJkdqkmw-oZvBPJ-NVOduqaq5V01MrkmX49vv0j2aaHYx'
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