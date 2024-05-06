  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';
  import Loader from '../../../components/loader/Loader'
  import Modal from "react-bootstrap/Modal";
  import Button from "react-bootstrap/Button";

  const AdminHikes = () => {
    const [hikesData, setHikesData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [message, setMessage] = useState("");
    //create campagin states
    const [hikeName, setHikeName] = useState('')
    const [hikeDate, setHikeDate] = useState('')
    const [hikeDescription, setHikeDescription] = useState('')
    const [hikeLocation, setHikeLocation] = useState('')
    const [availableSpots, setAvailableSpots] = useState('')
    const [image, setImage] = useState('')

    //for editing hikes
    const [selectedHike, setSelectedHike] = useState({});


    useEffect(() => {
      setLoading(true)
      axios
        .get('http://localhost:5000/hikes')
        .then((response) => {
          setHikesData(response.data);
          setLoading(false)
          console.log(response)
        })
        .catch((error) => {
          console.log(error);
          setLoading(false)
        });
    }, []);

    const handleDelete = async (hike) => {
      try{
      const response = await axios.delete(`http://localhost:5000/hikes/${hike.id}`)
      setHikesData((prevHikes) => prevHikes.filter((h) => h.id !== hike.id));
      setMessage('Deleted successfully')
      console.log(response)
      }catch(err){
        console.log(err)
        setMessage('Failed to delete')
      }
    }

    const handleCreate = async () => {
      try{
        let formData = new FormData();
        formData.append('hikeName', hikeName);
        formData.append('hikeDate', hikeDate);
        formData.append('hikeDescription', hikeDescription);
        formData.append('hikeLocation', hikeLocation);
        formData.append('availableSpots', availableSpots);
        formData.append('image', image);

      const response = await axios.post('http://localhost:5000/hikes', formData,  {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(response)
      setMessage('Created Successfully')
      setHikesData((prevHikes) => [...prevHikes, response.data]); 
      }catch(err){
        console.log(err)
      setMessage('failed to create')
      }
    }

    const handleEdit = async (hike) => {
      try{
        const formData = new FormData()
        formData.append('hikeName', hikeName);
        formData.append('hikeDate', hikeDate);
        formData.append('hikeDescription', hikeDescription);
        formData.append('hikeLocation', hikeLocation);
        formData.append('availableSpots', availableSpots);
        formData.append('image', image);
      const response = await axios.patch(`http://localhost:5000/hikes/${hike.id}` , formData ,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(response)
      setMessage('Edited Successfully')
      setHikesData((prevHikes) => prevHikes.map((h) => (h.id === selectedHike.id ? response.data : h)));
      }catch(err){
        console.log(err)
      }
    }

    const handeModalClick = () => {
      setShowModal(true);
    };

    const handleEditModalClick = (hike) => {
      setHikeName(hike.hikeName);
      setHikeLocation(hike.hikeLocation);
      setHikeDate(new Date(hike.hikeDate).toISOString().split('T')[0]);
      setHikeDescription(hike.hikeDescription);
      setAvailableSpots(hike.availableSpots);
    
      // Then set the selectedHike state
      setSelectedHike(hike);
    
      setShowEditModal(true);
    };

    const formattedDate = (dateString) => {
      const date = new Date(dateString);
    
      // Example: Display only the date in "YYYY-MM-DD" format
      const formattedDateString = date.toISOString().split('T')[0];
    
      return formattedDateString;
    };


    return (
      <div  style={{ overflow: 'auto', maxHeight: '740px' }}>
        <button className='m-5 w-50 fa fa-add btn btn-success' onClick={handeModalClick}>Add</button>
      <div className='d-flex gap-5 flex-wrap m-5'>
  {hikesData.map((hike, index) => (
  <div className="card" style={{width: '18rem'}}>
    <img src={`http://localhost:5000/${hike.image}`} className="card-img-top" alt="Chicago Skyscrapers"/>
    <div className="card-body">
      <h5 className="card-title text-success">{hike.hikeName}</h5>
      <p className="card-text hike-description-details ">{hike.hikeDescription}</p>
    </div>
    <ul className="list-group list-group-light list-group-small">
      <li className='d-flex justify-content-between px-4'>
              <FaUsers />
              Spots:{hike.availableSpots} 
          </li>
          <li className='d-flex justify-content-between px-4'>
          <FaMapMarkerAlt /> 
          {hike.hikeLocation}
          </li>
          <li className='d-flex justify-content-between px-4'>
          <FaCalendarAlt />
          {formattedDate(hike.hikeDate)}
          </li>
    </ul>
    <div className="card-body d-flex justify-content-center gap-2">
      <button className='btn btn-success fa fa-edit ' onClick={() =>handleEditModalClick(hike)}></button>
      <button className='btn btn-danger fa fa-trash' onClick={() => handleDelete(hike)}></button>
    </div>
  </div>
  ))}
  </div>
  <Modal show={showModal} onHide={() => setShowModal(false)} >
                <Modal.Header closeButton>
                  <Modal.Title>Create A Hike</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                                  <label
                  className="form-label mt-4"
                  htmlFor="hike-name"
                  >
                  Hike Name 
                  </label>
                  <div className="form-outline flex-fill mb-0">
                                  <input
                                    type="text"
                                    id="hike-name"
                                    className="form-control"
                                    value={hikeName}
                                    onChange={(e) => setHikeName(e.target.value)}
                                  />
                                  </div>
                                  <div className="fw-lighter">The Name of Your desired hike</div>
                                  <label
                  className="form-label mt-4"
                  htmlFor="hike-location"
                  >
                  Hike Location 
                  </label>
                  <div className="form-outline flex-fill mb-0">
                                  <input
                                    type="text"
                                    id="hike-location"
                                    className="form-control"
                                    value={hikeLocation}
                                    onChange={(e) => setHikeLocation(e.target.value)}
                                  />
                                  </div>
                                  <div className="fw-lighter">The Name of Your desired hike</div>
                                  <label
                  className="form-label mt-4"
                  htmlFor="hike-date"
                  >
                  Hike Date 
                  </label>
                  <div className="form-outline flex-fill mb-0">
                                  <input
                                    type="date"
                                    id="hike-date"
                                    className="form-control"
                                    value={hikeDate}
                                    onChange={(e) => setHikeDate(e.target.value)}
                                  />
                                  </div>
                                  <div className="fw-lighter">The Date when your hike starts</div>
                                  <label
                  className="form-label mt-4"
                  htmlFor="hike-image"
                  >
                  Hike Image 
                  </label>
                  <div className="form-outline flex-fill mb-0">
                                  <input
                                    type="file"
                                    id="hike-image"
                                    className="form-control"
                                    onChange={(e) => setImage(e.target.files[0])}
                                  />
                                  </div>
                                  <div className="fw-lighter">The Image of Your hike</div>
                                  <label
                  className="form-label mt-2"
                  htmlFor="amount-of-seats"
                  >
                  Amount Of Seats 
                  </label>
                  <div className="form-outline flex-fill mb-0">
                                  <input
                                    type="text"
                                    id="amount-of-seats"
                                    className="form-control"
                                    value={availableSpots}
                                    onChange={(e) => setAvailableSpots(e.target.value)}
                                  />
                                  </div>
                                  <div className="fw-lighter">The Amount of Spots available for Your hike</div>
                                  <label
                  className="form-label mt-4"
                  htmlFor="hike-name"
                  >
                  Hike description 
                  </label>
                  <div className="form-outline flex-fill mb-0">
                                  <input
                                    type="text"
                                    id="hike-description"
                                    className="form-control py-5 mw-25"
                                    value={hikeDescription}
                                    onChange={(e) => setHikeDescription(e.target.value)}
                                  />
                                  </div>
                                  <div className="fw-lighter">The description of Your desired hike</div>
                                  <div className={message.includes('Success') ? 'text-success' : 'text-danger'}>{message}</div>
                      </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Close
                  </Button>
                  <Button variant="success" onClick={handleCreate}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* edit modal  */}
              <Modal show={showEditModal} onHide={() => setShowEditModal(false)} >
                <Modal.Header closeButton>
                  <Modal.Title>Edit Your hike</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                                  <label
                  className="form-label mt-4"
                  htmlFor="hike-name"
                  >
                 Edit Hike Name 
                  </label>
                  <div className="form-outline flex-fill mb-0">
                                  <input
                                    type="text"
                                    id="hike-name"
                                    className="form-control"
                                    value={hikeName}
                                    onChange={(e) => setHikeName(e.target.value)}
                                  />
                                  </div>
                                  <div className="fw-lighter">The Name of Your desired hike</div>
                                  <label
                  className="form-label mt-4"
                  htmlFor="hike-location"
                  >
                  Edit Hike Location 
                  </label>
                  <div className="form-outline flex-fill mb-0">
                                  <input
                                    type="text"
                                    id="hike-location"
                                    className="form-control"
                                    value={hikeLocation}
                                    onChange={(e) => setHikeLocation(e.target.value)}
                                  />
                                  </div>
                                  <div className="fw-lighter">Edit The Name of Your desired hike</div>
                                  <label
                  className="form-label mt-4"
                  htmlFor="hike-date"
                  >
                  Edit Hike Date 
                  </label>
                  <div className="form-outline flex-fill mb-0">
                                  <input
                                    type="date"
                                    id="hike-date"
                                    className="form-control"
                                    value={hikeDate}
                                    onChange={(e) => setHikeDate(e.target.value)}
                                  />
                                  </div>
                                  <div className="fw-lighter">Edit The Date when your hike starts</div>
                                  <label
                  className="form-label mt-4"
                  htmlFor="hike-image"
                  >
                  Edit Hike Image 
                  </label>
                  <div className="form-outline flex-fill mb-0">
                                  <input
                                    type="file"
                                    id="hike-image"
                                    className="form-control"
                                    onChange={(e) => setImage(e.target.files[0])}
                                  />
                                  </div>
                                  <div className="fw-lighter">Edit The Image of Your hike</div>
                                  <label
                  className="form-label mt-2"
                  htmlFor="amount-of-seats"
                  >
                  Edit Amount Of Seats 
                  </label>
                  <div className="form-outline flex-fill mb-0">
                                  <input
                                    type="text"
                                    id="amount-of-seats"
                                    className="form-control"
                                    value={availableSpots}
                                    onChange={(e) => setAvailableSpots(e.target.value)}
                                  />
                                  </div>
                                  <div className="fw-lighter">Edit The Amount of Spots available for Your hike</div>
                                  <label
                  className="form-label mt-4"
                  htmlFor="hike-name"
                  >
                  Edit Hike description 
                  </label>
                  <div className="form-outline flex-fill mb-0">
                                  <input
                                    type="text"
                                    id="hike-description"
                                    className="form-control py-5 mw-25"
                                    value={hikeDescription}
                                    onChange={(e) => setHikeDescription(e.target.value)}
                                  />
                                  </div>
                                  <div className="fw-lighter">Edit The description of Your desired hike</div>
                                  <div className={message.includes('Success') ? 'text-success' : 'text-danger'}>{message}</div>
                      </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                    Close
                  </Button>
                  <Button variant="success" onClick={() => handleEdit(selectedHike)}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
  </div>
    );
  };

  export default AdminHikes ;
