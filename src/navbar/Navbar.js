import "../navbar/navbar.css";
import { Link } from 'react-router-dom'

import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to={"/"}>
            <h3 className="nav-buttons">Home</h3>
        </Link>
        <Link to={"/hikes"}>
            <h3 className="nav-buttons">Upcoming Hikes</h3>
        </Link>
        <Link to={"/images"}>
            <h3 className="nav-buttons">Photo Gallery</h3>
        </Link>
        <Link to={"/F&Q"}>
            <h3 className="nav-buttons">Frequently Asked Questions</h3>
        </Link>
        <Link to={"/ContactUs"}>
            <h3 className="nav-buttons">Contact Us</h3>
        </Link>
    </nav>
  )
}

export default Navbar