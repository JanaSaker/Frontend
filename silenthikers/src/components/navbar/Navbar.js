import "./navbar.css";
import { Link } from 'react-router-dom'
import i21 from './21.png'

import React from 'react'

const Navbar = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg px-5">
            <div className="container-fluid justify-content-between align-items-center">
              <div className='d-flex justify-content-between'>
              <img src={i21} alt="" className="w-25 h-25 custom-image-class" />
                <Link to={'/'}>
                  <div className="row"></div>
                </Link>
              </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={'/'}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={'/hikes'}>
                      Upcoming Hikes
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={'/images'}>
                      Photo Gallery
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={'/f&Q'}>
                      F&QS
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={'/signup/signin'}>
                      Signup/Signin
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      );
    };

export default Navbar