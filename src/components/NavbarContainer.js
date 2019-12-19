import React, { Component } from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';

class NavbarContainer extends Component {
  render() {
    return (
      <div>
        <NavBar cart={this.props.cart} />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(NavbarContainer);
