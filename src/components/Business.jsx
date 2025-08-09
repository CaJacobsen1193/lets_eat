import image from '../images/pizza.jpg'
import './Business.css';

const business = {
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

function Business() {
    return (
        <div className='business'>
            <div className='image-container'>
                <img src={business.imageSrc} name='business-image'/>
            </div>
            <h2 name='name'>{business.name}</h2>
            <div className='business-details'>
                <div className='business-info'>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{business.state}, {business.zipCode}</p>
                </div>
                <div className='business-reviews'>
                    <h3>{business.type}</h3>
                    <p>{business.rating} stars</p>
                    <p>{business.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    )
}

export default Business;