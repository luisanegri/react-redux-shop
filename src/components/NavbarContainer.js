
import React, { Component } from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';

class NavbarContainer extends Component {
  render() {
    console.log('NavbarContainer render test!');
    return (
      <div>
        <NavBar cart={this.props.cart} />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('mapstate NAVCONTAINER', state);
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(NavbarContainer);

