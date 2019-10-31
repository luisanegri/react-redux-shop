import React from "react";
import { Link } from "react-router-dom";

export default function ProductDetail(props) {
  console.log("props are you there?", props);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand nav-brand-custom" to="/">
          Shop
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
              <Link className="nav-link link-custom" to="/">
                Cart
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
          {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
        </div>
      </nav>
    </div>
  );
}
