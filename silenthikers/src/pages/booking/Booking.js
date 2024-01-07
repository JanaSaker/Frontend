import React from "react";
import { useLocation } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const hike = location.state?.hike;
  console.log(hike);

  return (
    <div className="vh-100 w-100">
      <div className="d-flex justify-content-around align-items-center h-100 w-100">  
        <img
          src={`http://localhost:5000/${hike.image}`}
          alt="hike"
          className="w-50 rounded m-5"
        />
        <div className="card w-50 m-5 " style={{width: '18rem'}}>
          <form>
          <div className="card-body  d-flex flex-column gap-3">
            <h5 className="card-title text-success text-bold">{hike.hikeName}</h5>
            <p className="card-text hike-description-details">
              {hike.hikeDescription}
            </p>
            <li className='d-flex justify-content-between px-4'>
              <p><FaUsers /></p>
              
              {hike.availableSpots} 
          </li>
          <li className='d-flex justify-content-between px-4'>
          <FaMapMarkerAlt /> 
          {hike.hikeLocation}
          </li>
          <li className='d-flex justify-content-between px-4'>
          <FaCalendarAlt />
          {hike.hikeDate}
          </li>
          <label htmlFor="amountOfSeats">Amount of seats to reserve</label>
          <input className="form-control" type="text" id="amountOfSeats"/>
          <p className="fw-lighter">Book Your Seat Now and enjoy the beauty of lebanon !, Book now and wait for our confirmation You can Check your Booking Status <Link to={'/userBookings'} className="text-success">here</Link> </p>
            <button className="btn btn-success">
              Book Now
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
