import { useEffect, useState } from 'react';
import axios from 'axios';
import './PhotoGallery.css';

const PhotoGallery = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:8080/api/images')
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.length);
  };
  
  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
    prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <div>
      <div className='rectangle'></div>
      <h1 className="photo-gallery">Photo Gallery</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="gallery-container">
          <div className="big-image">
            <img
              className="image-big"
              src={`http://localhost:8080/${data[currentImageIndex]?.image}`}
              alt={`pic ${currentImageIndex}`}
            />
          </div>
          <div className="small-images">
            {data
              .filter((_, index) => index !== currentImageIndex)
              .slice(0, 2) // Display the first two smaller images
              .map((item, index) => (
                <div key={index}>
                  <img
                    className="image-small"
                    src={`http://localhost:8080/${item.image}`}
                    alt={`pic ${index}`}
                    onError={() => {
                      console.log(`Error loading image: ${item.image}`);
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
      <div className="navigation-buttons">
        <button className='previous' onClick={previousImage}>Prev</button>
        <button className='next' onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default PhotoGallery;
