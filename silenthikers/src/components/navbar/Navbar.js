import React from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogOut } from '../../hooks/useLogOut';
import i21 from './21.png';
import './navbar.css';

const Navigation = () => {
  const { user } = useAuthContext();
  const { logout } = useLogOut();

  const handleLogout = async (e) => {
    logout()
  }
  return (
    <Navbar expand="lg"  className="px-5 navbar">
      <Navbar.Brand as={Link} to="/" className='d-flex justify-content-baseline'>
        <img src={i21} alt="" className="custom-image-class" />
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end">
        <Nav>
          <NavLink as={Link} to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink as={Link} to="/hikes" className="nav-link">
            Upcoming Hikes
          </NavLink>
          <NavLink as={Link} to="/images" className="nav-link">
            Photo Gallery
          </NavLink>
          <NavLink as={Link} to="/f&Q" className="nav-link">
            F&QS
          </NavLink>
          {!user && (
            <NavLink as={Link} to="/signup/signin" className="nav-link">
              Signup/Signin
            </NavLink>
          )}
              {user && (
            <NavLink as={Link} onClick={handleLogout} to="/signup/signin" className="nav-link">
              <span className='fa fa-sign-out'></span> Logout
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
