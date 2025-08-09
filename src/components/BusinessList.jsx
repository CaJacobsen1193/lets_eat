import Business from './Business';
import './BusinessList.css';


function BusinessList(props) {
    return (
        <div className='business-list'>
            {
                props.businesses.map((business, index) =>
                <Business key={index} business={business}/>)
            }
        </div>
    )
}

export default BusinessList;