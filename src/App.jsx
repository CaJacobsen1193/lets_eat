import React from 'react';
import Business from './components/Business';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import image from './images/pizza.jpg';
import './App.css';

const businesses = [
    {
        name: 'Pizza Shop',
        imageSrc: image,
        address: "123 Main St",
        city: 'Woburn',
        state: 'MA',
        zipCode: '01801',
        type: 'Italian',
        rating: 5,
        reviewCount: 95
    },{
        name: 'Pizza Shop',
        imageSrc: image,
        address: "123 Main St",
        city: 'Woburn',
        state: 'MA',
        zipCode: '01801',
        type: 'Italian',
        rating: 5,
        reviewCount: 95
    },{
        name: 'Pizza Shop',
        imageSrc: image,
        address: "123 Main St",
        city: 'Woburn',
        state: 'MA',
        zipCode: '01801',
        type: 'Italian',
        rating: 5,
        reviewCount: 95
    },{
        name: 'Pizza Shop',
        imageSrc: image,
        address: "123 Main St",
        city: 'Woburn',
        state: 'MA',
        zipCode: '01801',
        type: 'Italian',
        rating: 5,
        reviewCount: 95
    },{
        name: 'Pizza Shop',
        imageSrc: image,
        address: "123 Main St",
        city: 'Woburn',
        state: 'MA',
        zipCode: '01801',
        type: 'Italian',
        rating: 5,
        reviewCount: 95
    },{
        name: 'Pizza Shop',
        imageSrc: image,
        address: "123 Main St",
        city: 'Woburn',
        state: 'MA',
        zipCode: '01801',
        type: 'Italian',
        rating: 5,
        reviewCount: 95
    },{
        name: 'Pizza Shop',
        imageSrc: image,
        address: "123 Main St",
        city: 'Woburn',
        state: 'MA',
        zipCode: '01801',
        type: 'Italian',
        rating: 5,
        reviewCount: 95
    },{
        name: 'Pizza Shop',
        imageSrc: image,
        address: "123 Main St",
        city: 'Woburn',
        state: 'MA',
        zipCode: '01801',
        type: 'Italian',
        rating: 5,
        reviewCount: 95
    },{
        name: 'Pizza Shop',
        imageSrc: image,
        address: "123 Main St",
        city: 'Woburn',
        state: 'MA',
        zipCode: '01801',
        type: 'Italian',
        rating: 5,
        reviewCount: 95
    }
]

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
        <BusinessList businesses={businesses}/>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  )
};

export default App;