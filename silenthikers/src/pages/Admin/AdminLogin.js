import React from 'react';
import i20 from '../Home/28.jpeg'
import axios from 'axios'
import { useSignInAdmin } from '../../hooks/useSignInAdmin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { signInAdmin, error, loading } = useSignInAdmin();

    const handleLogin = async (event) => {
      event.preventDefault();
  
      // Get the input values from the signInAdmin hook
      await signInAdmin(userName, password);
    };

  return (
    <div>
      <section className="text-center">
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage: `url(${i20})`,
            height: '300px',
          }}
        ></div>
        <div
          className="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            marginTop: '-100px',
            background: 'hsla(0, 0%, 100%, 0.8)',
            backdropFilter: 'blur(30px)',
          }}
        >
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Admin Login</h2>
                <form>
                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" className="form-control" onChange={(e) => setUserName(e.target.value)} />
                    <label className="form-label" htmlFor="form3Example3">
                      userName
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>
                  <div className="form-check d-flex justify-content-center mb-4">
                    <label className="form-check-label" htmlFor="form2Example33"></label>
                  </div>
                  <button type="submit" className="btn btn-success btn-block mb-4 w-100" onClick={handleLogin}>
                    Log In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;
