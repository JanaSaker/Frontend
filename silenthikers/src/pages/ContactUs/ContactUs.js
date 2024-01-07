import React, { useState } from "react";
import "../ContactUs/ContactUs.css";
import axios from "axios";
import ReactCardFlip from "react-card-flip";


const ContactUs = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get the input values
    const name = event.target.elements.nameInput.value;
    const email = event.target.elements.emailInput.value;
    const phoneNumber = event.target.elements.phoneNumberInput.value;

    // Check if any required field is empty
    if (!name && !email && !phoneNumber) {
      setErrorMessage("Please fill all the required fields.");
      return;
    }
    if (!name) {
      setErrorMessage("Please provide a name.");
      return;
    }
    if (!email) {
      setErrorMessage("Please provide a email.");
      return;
    }
    if (!phoneNumber) {
      setErrorMessage("Please provide a phoneNumber.");
      return;
    }
    const userData = {
      name,
      email,
      phoneNumber,
    };

    try {
      await axios.post(
        "https://silent-hikers1-o1fr.onrender.com/api/users",
        userData
      );
      event.target.reset();
      setErrorMessage("Registration successful!!");
    } catch (error) {
      console.error(error);
    }
  };

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
                                  id="form3Example4cd"
                                  className="form-control"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example4cd"
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
                                  id="form3Example4c"
                                  className="form-control"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example4c"
                                >
                                  Password
                                </label>
                              </div>
                            </div>
                            <div className="d-flex flex-column justify-content-center mb-3 mb-lg-4 w-100">
                              <button
                                type="button"
                                className="btn btn-success w-100"
                              >
                                Sign up
                              </button>
                              <span className="text-center">OR</span>
                              <button className="btn btn-block btn-primary w-100" style={{backgroundColor: '#dd4b39'}} type="submit">
                             <i className="fab fa-google"></i> Sign in with Google
                            </button>
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
                                  id="form3Example1c"
                                  className="form-control"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example1c"
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
                                  id="form3Example4c"
                                  className="form-control"
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example4c"
                                >
                                  Password
                                </label>
                              </div>
                            </div>
                            <div className="d-flex flex-column gap-1 justify-content-center mb-3 mb-lg-4 w-100">
                              <button
                                type="button"
                                className="btn btn-success w-100"
                              >
                                Sign In
                              </button>
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
      </ReactCardFlip>
    </>
  );
};

export default ContactUs;
