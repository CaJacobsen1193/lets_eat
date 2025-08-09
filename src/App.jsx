import React from 'react';
import Business from './components/Business';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='main'>
      <div className='title'>
        <h1>Ravenous</h1>
      </div>
      <div className='nav'>
        <SearchBar />
      </div>
      <div className='businesses'>
        <BusinessList />
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  )
};

export default App;