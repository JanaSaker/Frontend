import React, { useState } from "react";
import "../ContactUs/ContactUs.css";
import axios from "axios";
import ReactCardFlip from "react-card-flip";
import { useSignIn } from '../../hooks/useSignIn';


const ContactUs = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const { signIn, error, loading } = useSignIn();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get the input values from the signIn hook
    await signIn(userName, password);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const userData = {
      userName,
      password,
      email,
      phoneNumber
    }
    try{
    const response = await axios.post('http://localhost:5000/users',userData)
    console.log(response)
    if(response.status === 200 ){
      setIsFlipped(!isFlipped);
    }
    setMessage('successfull registeration')
    }catch(err){
      console.log(err)
      setMessage('error registering user')
    }
  }
 

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="card">
          <section className="my-5">
            <div className="container" style={{ height: "100%" }}>
              <div
                className="row d-flex justify-content-center align-items-center"
                style={{ height: "100%" }}
              >
                <div className="col-lg-12 col-xl-11">
                  <div
                    className="card text-black"
                    style={{ borderRadius: "25px" }}
                  >
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                           Sign In
                          </p>
                          <form className="mx-1 mx-md-4">
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  id="log in username"
                                  className="form-control"
                                  onChange={(e) => setUserName(e.target.value)}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="log in username"
                                >
                                  Username
                                </label>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="password"
                                  id="login password"
                                  className="form-control"
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="login password"
                                >
                                  Password
                                </label>
                              </div>
                            </div>
                            <div className="d-flex flex-column gap-1 justify-content-center mb-3 mb-lg-4 w-100">
                              <button
                                type="button"
                                className="btn btn-success w-100"
                                onClick={handleSubmit}
                              >
                                Sign In
                              </button>
                              {error && (
                  <div className={error.includes('success') ? 'text-success' : 'text-danger'}>{error}</div>
                  )}
                              <span className="text-center">OR</span>
                              <button className="btn btn-block btn-primary w-100" style={{backgroundColor: '#dd4b39'}} type="submit">
                             <i className="fab fa-google"></i> Sign in with Google
                            </button>
                            </div>
                            <p>Don't have an account? <span className="text-success" onClick={handleFlip}>Register now</span></p>
                          </form>
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="img-fluid rounded"
                            alt="Sample"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="card">
          <section className="my-5">
            <div className="container" style={{ height: "100%" }}>
              <div
                className="row d-flex justify-content-center align-items-center"
                style={{ height: "100%" }}
              >
                <div className="col-lg-12 col-xl-11">
                  <div
                    className="card text-black"
                    style={{ borderRadius: "25px" }}
                  >
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                            Sign up
                          </p>
                          <form className="mx-1 mx-md-4">
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  id="form3Example1c"
                                  className="form-control"
                                  onChange={(e) => setUserName(e.target.value)}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example1c"
                                >
                                  Your username
                                </label>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="email"
                                  id="form3Example3c"
                                  className="form-control"
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example3c"
                                >
                                  Your Email
                                </label>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="text"
                                  id="register phonenumber"
                                  className="form-control"
                                  onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="register phonenumber"
                                >
                                  Phone Number
                                </label>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="password"
                                  id="register password"
                                  className="form-control"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="register password"
                                  onChange={(e) => setPassword(e.target.value)}
                                >
                                  Password
                                </label>
                              </div>
                            </div>
                            <div className="d-flex flex-column justify-content-center mb-3 mb-lg-4 w-100">
                              <button
                                type="button"
                                className="btn btn-success w-100"
                                onClick={handleRegister}
                              >
                                Sign up
                              </button>
                              <span className="text-center">OR</span>
                              <button className="btn btn-block btn-primary w-100" style={{backgroundColor: '#dd4b39'}} type="submit">
                             <i className="fab fa-google"></i> Sign in with Google
      
                            </button>
                            {message && (
                  <div className={message.includes('success') ? 'text-success' : 'text-danger text-center mt-2'}>{message}</div>
                  )}
                            </div>
                            <p>Already have an account? <span className="text-success" onClick={handleFlip}>Log In</span></p>
                          </form>
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                            className="img-fluid"
                            alt="Sample"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </ReactCardFlip>
    </>
  );
};

export default ContactUs;
