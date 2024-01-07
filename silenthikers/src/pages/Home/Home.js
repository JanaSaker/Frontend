import React from 'react';
import './Home.css';
import homeV from './vidio2.mp4'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='w-100'>
  <div className="">
      <video className="embed-responsive-item w-100" autoPlay muted loop>
        <source src={homeV} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>
      <div className='home-header-sentence'>
     <h1 className='text-white'>Towards</h1>
     <h1 className='text-sucess sentence-margin'>An</h1>
     <h1 className='text-white'>Unforgotabble</h1>
     <h1 className='text-sucess sentence-margin'>Experience</h1>
     </div>
     <div className='d-flex justify-content-center flex-column align-items-center w-100'>
     <p className='mb-5'>_________________________________________________________________________________________________</p>
     <div className='d-flex w-100 '>
      <Link className='nav-link w-100 text-center' to={'/images'}>
     <button className='btn btn-success w-50 text-white my-5'>Explore More</button>
     </Link>
     <Link className='nav-link w-100 text-center' to={'/hikes'}>
     <button className='btn btn-success w-50 text-white my-5'>Book Now</button>
     </Link>
     </div>
     <p className='my-5'>_________________________________________________________________________________________________</p>
     </div>
    </div>
  );
};

export default Home;
