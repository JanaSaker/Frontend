import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import picture from '../Home/29.jpeg';
import Home2 from '../Home/28.jpeg';

const Home = () => {
  return (
    <div className="home-desktop">
      <div className="home-overlap-group">
        <img className="home-img" src={picture} alt="" />
        <div className="rec-group">
          <div className="img-rectangle"></div>
          <div className="home-header">
            <div className="home-rectangle" />
            <div className="Towards">Towards</div>
            <div className="An">
              An <span>-</span>
            </div>
            <div className="Unforgettable">Unforgettable</div>
            <div className="Experience">Experience</div>
          </div>
          <div className="home-aboutus">
            <Link to={'/hikes'}>
              <button className="home-book">Book For a Hike</button>
            </Link>
            <div className="photo-aboutus">
              <h1>Who Are We?</h1>
              We're a group of nature lovers who simply enjoy the peace and
              quiet of hiking. Our story began with a shared passion for the
              outdoors, and we've created this space for people who appreciate
              the serenity of nature. Whether you're a frequent hiker or just
              starting out, join us on the trail as we explore the beauty of
              silent walks and connect with the world around us. In our
              community, it's all about enjoying nature at your own pace and
              finding that special connection with the great outdoors.
            </div>
          </div>
        </div>
      </div>
      <div className="home-second-container">
        <img src={Home2} alt="" className="home-second-photo" />
      </div>
      <div className='home-second-p'>
        <h1 className='home-second-p-h1'>Hiking In Lebanon</h1>
        <h2 className='home-second-p-h2'>Hiking in Lebanon offers a unique and rewarding experience for outdoor enthusiasts. The positivity of hiking in this beautiful Middle Eastern country</h2>
        <div className="second-h3-group">
        <h3 className='home-second-p-h3'>Lebanon enjoys a Mediterranean climate, making it an excellent destination for hiking most of the year. The spring and autumn months are particularly pleasant, with mild temperatures and beautiful landscapes.</h3>
        <h3 className='home-second-p-h3'>Lebanon's history and culture add a unique dimension to your hiking experience. You can often encounter historical sites, ancient ruins, and traditional villages along the trails, providing insight into the country's rich heritage.</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
