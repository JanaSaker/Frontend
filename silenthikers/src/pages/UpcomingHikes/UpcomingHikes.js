import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpcomingHikes.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const UpcomingHikes = () => {
  const [hikesData, setHikesData] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8080/api/hikes')
      .then((response) => {
        setHikesData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='hikes-container'>
      {hikesData.map((hike, index) => (
        <div key={index} className='hike-card'>
            <div className='hike-image-container'>
              <img
                src={`http://localhost:8080/${hike.image}`}
                alt='hike image'
                className='hike-image'
              />
              <div className='hike-header'>
                <h3 className='hike-name'>{hike.hikeName}</h3>
                <p className='hike-date'><FaCalendarAlt /> <b>{hike.hikeDate}</b></p>
                <p className='hike-location'> <FaMapMarkerAlt /> <b>{hike.hikeLocation}</b></p>
              </div>
            </div>
          <div className='hike-details'>
            <p className='hike-description-details'> {hike.hikeDescription}</p>
          </div>
          <div className='hike-booking'>
            <p className='hike-spots'><FaUsers />&nbsp;{hike.availableSpots}</p>
            <button className='book-btn'>Book Hike</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingHikes;

