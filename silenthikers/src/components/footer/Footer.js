import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer-main'>
        <div className='footer-content'>
            <div className='footer-mail-div'>
                <span className="material-symbols-outlined">mail</span>
                <h3 className='info'>&nbsp;info@silenthikers.com</h3>
            </div>
            <div className='footer-social-media'>
                <h3>Connect with us:</h3>
                <div className='spans'>
                    <FaFacebook className="socialmedia-icons" size={32}/>
                    <FaTwitter className="socialmedia-icons" size={32}/>
                    <FaInstagram className="socialmedia-icons"  size={32}/>
                    <FaLinkedin className='socialmedia-icons' size={32} />
                    <FaYoutube className='socialmedia-icons' size={32} />
                </div>
            </div>
        </div>
        <div className='copy-div'>
            <span>&copy;2023 All rights reserved</span>
        </div>
        </footer>
  )
}

export default Footer