import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Admin/admin.css';

const Admin = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataType, setDataType] = useState('');

  const fetchHikes = async () => {
    setLoading(true);
    axios
      .get('https://silent-hikers1-o1fr.onrender.com/api/hikes')
      .then((response) => {
        setData(response.data);
        setDataType('hikes');
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const fetchimages = async () => {
    setLoading(true);
    axios
      .get('https://silent-hikers1-o1fr.onrender.com/api/images')
      .then((response) => {
        setData(response.data);
        setDataType('images');
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchBookings = async () => {
    setLoading(true);
    axios
      .get('https://silent-hikers1-o1fr.onrender.com/api/bookings')
      .then((response) => {
        setData(response.data);
        setDataType('bookings');
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const fetchUsers = async () => {
    setLoading(true);
    axios
      .get('https://silent-hikers1-o1fr.onrender.com/api/users')
      .then((response) => {
        setData(response.data);
        setDataType('users');
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  ////////////////////////////////////////
  const deleteData = async (id) => {
    setLoading(true);
    await axios
      .delete(`https://silent-hikers1-o1fr.onrender.com/api/${dataType}/${id}`)
      .then(() => {
        // Remove the deleted item from the local state
        setData(data.filter((item) => item.id !== id));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
//////////////////////////////////////////////
  //   const editData = async (id, updatedData) => {
  //   const data = {

  //   };
  //   setLoading(true);
  //   axios
  //   .put(`https://silent-hikers1-o1fr.onrender.com/books/${id}` ,data)
  //   .then(() =>{
  //     setLoading(false)
  //   })
  //   .catch((err) => {
  //     setLoading(false)
  //     alert('an error occured please check your console')
  //     console.log(err);
  //   })
  //  };
  ////////////////////////////////////////////////

  return (
    <div className="admin-body">
      <div className="admin-dashboard">
        <button className="admin-buttons" onClick={fetchHikes}>
          Hikes
        </button>
        <button className="admin-buttons" onClick={fetchimages}>
          images
        </button>
        <button className="admin-buttons" onClick={fetchBookings}>
          bookings
        </button>
        <button className="admin-buttons" onClick={fetchUsers}>
          users
        </button>
      </div>
      <div className="data-shown">
        {data &&
          data.map((item, index) => (
            <div key={index}>
              {dataType === 'hikes' && (
                <div>
                  <div className="admin-hikes-container">
                    {item.hikeName} | <div className='hike-description'> {item.hikeDescription}</div> | {item.hikeDate} | {item.hikeLocation} | <img className='admin-hike-image' src={`https://silent-hikers1-o1fr.onrender.com/${item.image}`} alt='' />
                    <button className='admin-delete-button' onClick={() => deleteData(item._id)}>Delete</button>
                  </div>
                </div>
              )}
              {dataType === 'images' && (
                <div>
                  <div className="admin-images-container">
                    {item.image} , 
                    <button className='admin-delete-button' onClick={() => deleteData(item._id)}>Delete</button>
                  </div>
                </div>
              )}
              {dataType === 'bookings' && (
                <div>
                  <div className="admin-bookings-container">
                    {item._id}
                    <button className='admin-delete-button' onClick={() => deleteData(item._id)}>Delete</button>
                  </div>
                </div>
              )}
              {dataType === 'users' && (
                <div>
                  <div className="admin-users-container">
                    {item.email}
                    <button className='admin-delete-button' onClick={() => deleteData(item._id)}>Delete</button>
                  </div>
                </div>
              )}

            </div>
          ))}
      </div>
    </div>
  );
};

export default Admin;
