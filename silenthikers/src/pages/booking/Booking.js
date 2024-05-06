import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import axios from 'axios'

const Booking = () => {
  const location = useLocation();
  const hike = location.state?.hike

  const [message, setMessage] = useState()
  const { user } = useAuthContext()
  const [amountOfSeats, setAmountOfSeats] = useState()

  const hikeName = hike?.hikeName;
  const userName = user?.userName;
  console.log(hikeName)
  console.log(userName)
  console.log(amountOfSeats)


  const handleBooking = async(e) => {
    e.preventDefault();

    if (amountOfSeats > hike.availableSpots) {
      setMessage('The amount of seats entered is more than the available ones');
      return; // Exit the function early if the condition is true
    }
    if (amountOfSeats < 0 ) {
      setMessage('You cant Enter a negative amount');
      return; // Exit the function early if the condition is true
    }
    if (amountOfSeats == 0 ) {
      setMessage(`Please put a number you cant more from 0 and less than ${hike.availableSpots}`);
      return; // Exit the function early if the condition is true
    }

    const userData = {
      hikeName,
      userName,
      amountOfSeats
    }
    try{
    const response = await axios.post('http://localhost:5000/bookings', userData)
    console.log(response)
    setMessage('Booked successfully please wait for our approval')
    }catch(err){
      console.log(err)
    setMessage('Error Booking please try again later')
    }
  }

  const formattedDate = (dateString) => {
    const date = new Date(dateString);
  
    // Example: Display only the date in "YYYY-MM-DD" format
    const formattedDateString = date.toISOString().split('T')[0];
  
    return formattedDateString;
  };

  return (
    <div className="vh-100 w-100">
      <div className="d-flex flex-column flex-md-row justify-content-around align-items-center h-100 w-100">  
        <div className="card w-100 vh-50 m-5 " style={{width: '18rem'}}>
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
          {formattedDate(hike.hikeDate)}
          </li>
          <label htmlFor="amountOfSeats">Amount of seats to reserve</label>
          <input className="form-control" type="text" id="amountOfSeats" onChange={(e) => setAmountOfSeats(e.target.value)}/>
          <p className="fw-lighter">Book Your Seat Now and enjoy the beauty of lebanon !, Book now and wait for our confirmation You can Check your Booking Status in your booking section</p>
          {message && (
                  <div className={message.includes('success') ? 'text-success' : 'text-danger'}>{message}</div>
                  )}
          <button className="btn btn-success" onClick={handleBooking}>
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
