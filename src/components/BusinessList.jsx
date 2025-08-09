import Business from './Business';
import image from '../images/pizza.jpg'
import './BusinessList.css';

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

function BusinessList() {
    return (
        <div className='business-list'>
            {
                businesses.map((business, index) =>
                <Business key={index}/>)
            }
        </div>
    )
}

export default BusinessList;