import React, { Component } from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';

class NavbarContainer extends Component {
  render() {
    const { currentUser } = this.props;
    console.log('NavbarContainer currentUser', this.props);
    return (
      <div>
        <NavBar cart={this.props.cart} currentUser={currentUser} />;
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(NavbarContainer);
