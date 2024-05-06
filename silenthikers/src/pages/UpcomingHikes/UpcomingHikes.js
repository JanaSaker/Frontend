import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpcomingHikes.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loader from '../../components/loader/Loader'
import { useAuthContext } from '../../hooks/useAuthContext';
//swipper js imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const UpcomingHikes = () => {
  const [hikesData, setHikesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext()

  useEffect(() => {
    setLoading(true)
    axios
      .get('http://localhost:5000/hikes')
      .then((response) => {
        setHikesData(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(false)
      });
  }, []);

  const formattedDate = (dateString) => {
    const date = new Date(dateString);
  
    // Example: Display only the date in "YYYY-MM-DD" format
    const formattedDateString = date.toISOString().split('T')[0];
  
    return formattedDateString;
  };

  return (
    <div  className='upcoming-hikes-container'>
    {loading ? ( <Loader />) : (
     <div>
     <h1 className="photo-gallery m-5 h1 fw-bold custom-sentence-user-gallery">Upcoming Hikes</h1>
<Swiper
 effect={'cards'}
 grabCursor={true}
 modules={[EffectCards]}
 className="mySwiper1"
>
 {hikesData.map((hike, index) => (
   <SwiperSlide key={index} className='swiperslide1'>
     <div className="hike-card">
       {hikesData.length > 0 && (
         <div className="hike-image-container"> 
           <img
             src={`http://localhost:5000/${hike.image}`}
             alt={hikesData[index % hikesData.length].imageName}
             className="hike-image w-100 h-100"
           />
           <div className="hike-header">
             <h3 className="hike-name">{hike.hikeName}</h3>
             <p className="hike-date">
               <FaCalendarAlt /> <b>{formattedDate(hike.hikeDate)}</b>
             </p>
             <p className="hike-location">
               {' '}
               <FaMapMarkerAlt /> <b>{hike.hikeLocation}</b>
             </p>
           </div>
         </div>
       )}
       <div className="hike-details">
         <p className="hike-description-details">
           {' '}
          {hike.hikeDescription}
         </p>
       </div>
       <div className="hike-booking">
         <p className="hike-spots">
            <FaUsers />{' '}
           Spots: {hike.availableSpots} 
         </p>
         {user && user.hasOwnProperty('phoneNumber') && (
         <Link className='nav-link' to={'/booking'} state={{ hike: hike }}>
       <button className='btn btn-success w-100 hike-button'>Book Now</button>
       </Link>
       )}
        {!user && (
         <Link className='nav-link' to={'/signup/signin'}>
       <button className='btn btn-success w-100 hike-button'>Book Now</button>
       </Link>
       )}
       </div>
     </div>
   </SwiperSlide>
 ))}
</Swiper>
</div>
)}
    </div>
  );
};

export default UpcomingHikes;
