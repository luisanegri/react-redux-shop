import React, { Component } from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';

class NavbarContainer extends Component {
  render() {
    // const { currentUser } = this.props;
    console.log('NavbarContainer currentUser', this.props);
    return (
      <div>
        <NavBar cart={this.props.cart} currentUser={this.props.user} />;
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('currentUSer mapstatetoprops', state);
  return {
    cart: state.cart,
    user: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(NavbarContainer);
