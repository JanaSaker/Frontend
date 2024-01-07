import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PhotoGallery.css';
import Loader from '../../components/loader/Loader'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const PhotoGallery = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
    setLoading(true);
    axios
      .get('https://silent-hikers1-o1fr.onrender.com/api/images')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Get the form data
    const formData = new FormData();
    formData.append('image', event.target.elements.fileInput.files[0]);
    formData.append('phoneNumber', event.target.elements.phoneNumberInput.value);
    if(!event.target.elements.phoneNumberInput.value && !event.target.elements.fileInput.files[0]){
      setErrorMessage('select a photo and provide valid a number')
      return
    }
    if(!event.target.elements.phoneNumberInput.value){
      setErrorMessage('please provid a valid phone number')
      return
    }
    if(!event.target.elements.fileInput.files[0]){
      setErrorMessage('please select an image to upload')
      return
    }
    try {
      // Make the POST request
         await axios.post(
        'http://localhost:8080/api/images',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setErrorMessage('uploading successful!!');
      // Refresh the gallery by fetching the updated data
      setLoading(true);
      axios
        .get('https://silent-hikers1-o1fr.onrender.com/api/images')
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setErrorMessage('Error uploading image, make sure you provided an image and a valid number')
        });

      // Clear the form
      event.target.reset();
    } catch (error) {
      console.error(error);
      setErrorMessage('Error uploading image, make sure you provided an image and a valid number')
    }
  };

  return (
    <div className='vh-100 w-100'>
        {loading ? (
        <Loader />
      ) : (
    <div className='photo-gallery-container'>
      <h1 className="photo-gallery text-dark m-5">Photo Gallery</h1>
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
              <img src={`https://silent-hikers1-o1fr.onrender.com/${item.image}`} alt={`pic ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
    )}
    </div>
  );
};

export default PhotoGallery;
