import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div className="home-image">
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
}
