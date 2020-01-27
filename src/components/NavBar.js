import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <div className="nav-c">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand nav-brand-custom" to="/">
          <span>Shop </span>
          <span>
            <i className="fa fa-circle"></i>
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 navbar-nav-custom">
            <li className="nav-item active">
              <Link className="nav-link link-custom" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-custom" to="/cart">
                {props.cart.length}

                <i className="fa fa-shopping-cart"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-custom" to="/wishlist">
                Wishlist
                <i className="fa fa-heart"></i>
              </Link>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
