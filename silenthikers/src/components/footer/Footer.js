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
   <footer
     className="text-center text-lg-start text-dark"
     style={{backgroundColor: "white"}}
   >
     <section
       className="d-flex justify-content-between p-4 text-white"
       style={{backgroundColor: "#439145"}}
     >
       <div className="me-5">
         <span>Get connected with us on social networks:</span>
       </div>
       <div>
         <a href="" className="text-white me-4">
           <FaFacebook />
         </a>
         <a href="" className="text-white me-4">
           <FaTwitter />
         </a>
         <a href="" className="text-white me-4">
           <FaInstagram />
         </a>
         <a href="" className="text-white me-4">
           <FaLinkedin />
         </a>
         <a href="" className="text-white me-4">
           <FaYoutube />
         </a>
       </div>
     </section>

     <section className="">
       <div className="container text-center text-md-start">
         <div className="row mt-3">
           <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
             <h6 className="text-uppercase fw-bold">Silent Hikers</h6>
             <hr
               className=" mt-0 d-inline-block mx-auto"
               style={{width: "60px", backgroundColor: "#439145", height: "2px"}}
             />
             <p>
             Experience unforgettable adventures with Silent Hikers. We offer top-notch campsites to explore Lebanon's breathtaking beauty.
             </p>
           </div>
           <div className="col-md-3 col-lg-2 col-xl-2 mx-auto">
             <h6 className="text-uppercase fw-bold">Useful links</h6>
             <hr
               className="mt-0 d-inline-block mx-auto"
               style={{width: "60px", backgroundColor: "#439145", height: "2px"}}
             />
             <p>
               <a href="#!" className="text-dark">Upcoming Hikes</a>
             </p>
             <p>
               <a href="#!" className="text-dark">Joing Us Today</a>
             </p>
             <p>
               <a href="#!" className="text-dark">Photo Gallery</a>
             </p>
             <p>
               <a href="#!" className="text-dark">F&QS</a>
             </p>
           </div>

           <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0">
             <h6 className="text-uppercase fw-bold">Contact</h6>
             <hr
               className="mt-0 d-inline-block mx-auto"
               style={{width: "60px", backgroundColor: "#439145", height: "2px"}}
             />
             <p><i className="fas fa-home mr-3"></i>Beirut, Lebanon</p>
             <p><i className="fas fa-envelope mr-3"></i> info@silenthikers.com</p>
             <p><i className="fas fa-phone mr-3"></i> + 961 70967834</p>
           </div>
         </div>
       </div>
     </section>

     <div
       className="text-center p-3"
     >
       © 2020 Copyright@Silenthikers
     </div>
   </footer>
 );
};

export default Footer;
