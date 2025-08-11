import React, { useState } from 'react';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import searchBusinesses from './utils/yelp';
import './App.css';


function App() {
  const [businesses, setBusinesses] = useState([])

  const getBusinesses = async (searchTerm, searchLocation, sortOption) => {
    const result = await searchBusinesses(searchTerm, searchLocation, sortOption );
    const businesses = result.businesses.map(business => ({
      name: business.name,
      imageSrc: business.image_url,
      address: business.location.address1,
      city: business.location.city, 
      state: business.location.state,
      zipCode: business.location.zip_code,
      type: business.categories[0].title,
      rating: business.rating,
      reviewCount: business.review_count
    }))
    setBusinesses(businesses);
};

  return (
    <div className='main'>
      <div className='title'>
        <h1>Ravenous</h1>
      </div>
      <div className='nav'>
        <SearchBar getBusinesses={getBusinesses}/>
      </div>
      <div className='businesses'>
        <BusinessList businesses={businesses}/>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  )
};

export default App;