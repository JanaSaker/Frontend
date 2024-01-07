import React from 'react';
import '../Questions/Questions.css';
import { Link } from 'react-router-dom';

const Questions = () => {
  return (
<section>
  <h3 className="text-center mb-4 pb-2 text-success fw-bold mt-5">FAQ</h3>
  <p className="text-center mb-5">
    Find the answers for the most frequently asked questions below
  </p>

  <div className="row m-5">
    <div className="col-md-6 col-lg-4 mb-4">
      <h6 className="mb-3 text-success"><i className="far fa-paper-plane text-success pe-2"></i>What is silent hikers, and why is it special?</h6>
      <p>
      <strong>Silent hiking</strong> is a practice where hikers choose to explore nature in a quiet and meditative manner, minimizing conversation and noise. It's special because it allows you to immerse yourself fully in the natural world, experiencing a deeper connection with the environment and a sense of tranquility that's hard to find in our busy lives.
      </p>
    </div>

    <div className="col-md-6 col-lg-4 mb-4">
      <h6 className="mb-3 text-success"><i className="fas fa-pen-alt text-success pe-2"></i>How can I join the Silent Hikers Community and get involved?</h6>
      <p>
      Joining our community is easy! You can start by <Link to={"/signup/signin"} className='text-success'>Registering</Link>  in our website and Contacting us. Once you're a member, you'll gain access to our events, forums, and resources. We encourage everyone to participate in our hikes and discussions, and your input is always welcome.  We are planning to expand our community by creating a membership form where you can sign up for it.
      </p>
    </div>

    <div className="col-md-6 col-lg-4 mb-4">
      <h6 className="mb-3 text-success"><i className="fas fa-user text-success pe-2"></i>Are there any specific guidelines or etiquette for silent hikes?
      </h6>
      <p>
      Yes, we have some basic guidelines to ensure a smooth hiking experience. Participants are encouraged to maintain silence during hikes to respect the peaceful atmosphere. Leave no trace by following environmental conservation practices, and always be respectful of fellow hikers and the natural surroundings.
      </p>
    </div>

    <div className="col-md-6 col-lg-4 mb-4">
      <h6 className="mb-3 text-success"><i className="fas fa-rocket text-success pe-2"></i>Do I need to be an experienced hiker to participate in your community events?
      </h6>
      <p>
      Not at all! Our community welcomes hikers of all levels, from beginners to experts. We organize hikes of varying difficulty levels, and we're here to support your growth as a hiker. If you're new to silent hiking or nature exploration, you'll find a friendly and inclusive environment to start your journey.
      </p>
    </div>
    <div className="col-md-6 col-lg-4 mb-4">
      <h6 className="mb-3 text-success"><i className="fas fa-home text-success pe-2"></i>Can i Book for more Than one Person?
      </h6>
      <p>Absolutely Yes. You can <Link className='text-success' to={'/hikes'}>Book</Link> for as many People as you like and wait our confirmation</p>
    </div>

    <div className="col-md-6 col-lg-4 mb-4">
      <h6 className="mb-3 text-success"><i className="fas fa-book-open text-success pe-2"></i>Can i Upload images for the hikes i participate in?</h6>
      <p>
        Of course! You can <Link className='text-success' to={'/images'}>Upload</Link> any picture you want in the Photo Gallery.
      </p>
    </div>
  </div>
</section>
  );
};

export default Questions;
