import './footer.css';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-main">
        <h3 className="info">
          <span className="material-symbols-outlined">mail</span>
          info@silenthikers.com
        </h3>
      <div className="copy-div">
        <span>&copy;2023 All rights reserved</span>
      </div>
      <div className="footer-social-media">
        <h3>Connect with us:</h3>
        <div className="spans">
          <FaFacebook className="socialmedia-icons" size={18} />
          <FaTwitter className="socialmedia-icons" size={18} />
          <FaInstagram className="socialmedia-icons" size={18} />
          <FaLinkedin className="socialmedia-icons" size={18} />
          <FaYoutube className="socialmedia-icons" size={18} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
