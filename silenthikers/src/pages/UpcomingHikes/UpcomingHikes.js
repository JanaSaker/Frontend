import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpcomingHikes.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const UpcomingHikes = () => {
  const [hikesData, setHikesData] = useState([]);
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get('http://localhost:8080/api/hikes'),
        axios.get('http://localhost:8080/api/images')
      ])
      .then(
        axios.spread((hikesResponse, imagesResponse) => {
          setHikesData(hikesResponse.data);
          setImagesData(imagesResponse.data);
          console.log("hikes: ", hikesResponse.data);
          console.log("images ",imagesResponse.data);
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='hikes-container'>
      {hikesData.map((hike, index) => (
        <div key={index} className='hike-card'>
          {imagesData.length > 0 && (
            <div className='hike-image-container'>
              <img
                src={`http://localhost:8080/${hike.image}`}
                alt={imagesData[index % imagesData.length].imageName}
                className='hike-image'
              />
              <div className='hike-header'>
                <h3 className='hike-name'>{hike.hikeName}</h3>
                <p className='hike-date'><FaCalendarAlt /> <b>{hike.hikeDate}</b></p>
                <p className='hike-location'> <FaMapMarkerAlt /> <b>{hike.hikeLocation}</b></p>
              </div>
            </div>
            
          )}
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

