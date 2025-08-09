import './Business.css';

function Business(props) {
    return (
        <div className='business'>
            <div className='image-container'>
                <img src={props.business.imageSrc} name='business-image'/>
            </div>
            <h2 name='name'>{props.business.name}</h2>
            <div className='business-details'>
                <div className='business-info'>
                    <p>{props.business.address}</p>
                    <p>{props.business.city}</p>
                    <p>{props.business.state}, {props.business.zipCode}</p>
                </div>
                <div className='business-reviews'>
                    <h3>{props.business.type}</h3>
                    <p>{props.business.rating} stars</p>
                    <p>{props.business.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    )
}

export default Business;