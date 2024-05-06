import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PhotoGallery.css';
import Loader from '../../components/loader/Loader'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


const PhotoGallery = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState('')
  const { user } = useAuthContext()

  let phoneNumber = '';
  if(user){
   phoneNumber = user.phoneNumber;
  }

  const formData = new FormData()
  formData.append('phoneNumber', phoneNumber)
  formData.append('image', image)

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/images')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleCreateImage = async(e) => {
    e.preventDefault()
    try{
    const response = await axios.post('http://localhost:5000/images',formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log(response)
    setErrorMessage("Uploaded successfully")
    setData((prevImages) => [...prevImages, response.data]); 
    }catch(error){
      console.log(error)
      setErrorMessage('Error uploading')
    }
  }

  const handeModalClick = () => {
    setShowModal(true);
  };
  
 

  return (
    <div className='vh-100 w-100'>
        {loading ? (
        <Loader />
      ) : (
    <div className='photo-gallery-container'>
      <h1 className="photo-gallery text-dark m-5 custom-sentence-user-gallery">Photo Gallery</h1>
      <div className='text-center custom-sentence-user-gallery'>Already a user? {!user && ( <span><Link className='text-success' to={'/signup/signin'}>Upload</Link></span>)} {user && ( <span className='text-success' onClick={handeModalClick}><Link className='text-success'>Upload</Link></span>)} a photo of your hikes. If not <Link className='text-success' to={'/signup/signin'}>Register</Link>  Now</div>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={`http://localhost:5000/${item.image}`} alt={`pic ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
    )}
     <Modal show={showModal} onHide={() => setShowModal(false)} >
                <Modal.Header closeButton>
                  <Modal.Title>Upload a Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                                  <label
                  className="form-label mt-4"
                  htmlFor="hike-name"
                  >
                  Photo Url 
                  </label>
                  <div className="form-outline flex-fill mb-0">
                                  <input
                                    type="file"
                                    id="hike-name"
                                    className="form-control"
                                    onChange={(e) => setImage(e.target.files[0])}
                                  />
                                  </div>
                                  <div className="fw-lighter">Insert an image here</div>
                                  <div className={errorMessage.includes('success') ? 'text-success' : 'text-danger'}>{errorMessage}</div>
                      </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Close
                  </Button>
                  <Button variant="success" onClick={handleCreateImage}>
                    Upload image
                  </Button>
                </Modal.Footer>
              </Modal>
    </div>
    
  );
};

export default PhotoGallery;
