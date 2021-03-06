import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = ({ currentUser, itemCount }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/">
        <Navbar.Brand className="nav-brand-custom">
          <span>Shop </span>
          <span>
            <i className="fa fa-circle"></i>
          </span>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navbar-nav-custom">
          <div className="nav-item">
            <Link className="nav-link link-custom" to="/products">
              Products
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link link-custom" to="/cart">
              {itemCount}
              <i className="fa fa-shopping-cart"></i>
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link link-custom" to="/wishlist">
              Wishlist
              <i className="fa fa-heart"></i>
            </Link>
          </div>
          {currentUser ? (
            <div className="nav-item">
              <div
                className="nav-link link-custom"
                onClick={() => auth.signOut()}
              >
                Sign out
              </div>
            </div>
          ) : (
            <div className="nav-item">
              <Link
                to="/signin"
                className="nav-link link-custom"
                onClick={() => auth.signOut()}
              >
                Sign in
              </Link>
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
