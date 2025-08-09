import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-title'>
                <p>Ravenous</p>
            </div>
            <div className='contact'>
                <p>Contact Us</p>
            </div>
            <div className='social-media'>
                <a href="https://facebook.com"><FaFacebook /></a>
                <a href="https://twitter.com"><FaTwitter /></a>
                <a href="https://instagram.com"><FaInstagram /></a>
            </div>
        </div>
        
    )
}

export default Footer;