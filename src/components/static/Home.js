import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../landing.jpg';

const Home = () => {
  return (
    <div>
      <div className="home-image" style={{ backgroundImage: `url(${Image})` }}>
        <div className="hero-text">
          <Link to="/products">
            <button type="button" className="btn btn-lg btn-home">
              Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
