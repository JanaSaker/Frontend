import React from "react";
import "./Home.css";
import homeV from "./vidio2.mp4";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import i20 from "./28.jpeg";
import i21 from "./29.jpeg";

const Home = () => {
  const { user } = useAuthContext();

  return (
    <div className="w-100">
      <div className="h-100 position-relative">
        <video className=" w-100 vidio-element" autoPlay muted loop>
          <source src={homeV} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
          <div className="home-header-sentence">
        <h1 className="text-white">Towards</h1>
        <h1 className="text-sucess sentence-margin">An </h1>
        <h1 className="text-white">Unforgotabble</h1>
        <h1 className="text-sucess sentence-margin">Experience</h1>

        <div style={{width:'20rem'}} className="d-flex  gap-1 my-5 mx-3">
          <Link className="nav-link w-100 text-center" to={"/images"}>
            <button className="btn btn-success w-100 text-white">
              Explore
            </button>
          </Link>
          <Link className="nav-link w-100 text-center" to={"/hikes"}>
            <button className="btn btn-light w-100 text-success">
              Book Now
            </button>
          </Link>
        </div>
        </div>
      </div>
      {user && (
        <h4 className="fw-lighter text-center mt-5 custom-sentence-user-gallery">
          Welcome to silenthikers {user.userName}! please enjoy your tour in our
          website{" "}
        </h4>
      )}
      <div className="d-flex justify-content-center flex-column align-items-center w-100">
        <p className="mb-5">
          _________________________________________________________________________________________________
        </p>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between m-5 gap-5">
        <img className="rounded w-50" src={i20} alt="" />
        <div>
          <h1>Who Are We?</h1>
          We're a group of nature lovers who simply enjoy the peace and quiet of
          hiking. Our story began with a shared passion for the outdoors, and
          we've created this space for people who appreciate the serenity of
          nature. Whether you're a frequent hiker or just starting out, join us
          on the trail as we explore the beauty of silent walks and connect with
          the world around us. In our community, it's all about enjoying nature
          at your own pace and finding that special connection with the great
          outdoors.
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between m-5 gap-5">
        <div className="mt-5 pt-5">
          <h1>Hiking In Lebanon</h1>
          <div className="d-flex">
            <div>
              Hiking in Lebanon offers a unique and rewarding experience for
              outdoor enthusiasts. The positivity of hiking in this beautiful
              Middle Eastern country
            </div>
            <div>
              Hiking in Lebanon offers a unique and rewarding experience for
              outdoor enthusiasts. The positivity of hiking in this beautiful
              Middle Eastern country
            </div>
          </div>
          <div className="mt-5 text-center">
            Lebanon's history and culture add a unique dimension to your hiking
            experience. You can often encounter historical sites, ancient ruins,
            and traditional villages along the trails, providing insight into
            the country's rich heritage.
          </div>
        </div>
        <img
          className="rounded w-50 mt-5 custom-div-home-display"
          src={i21}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
