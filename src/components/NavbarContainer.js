import React, { Component } from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';

class NavbarContainer extends Component {
  render() {
    return (
      <div>
        <NavBar
          cart={this.props.cart}
          currentUser={this.props.currentUser}
          itemCount={this.props.itemCount}
        />
        ;
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    currentUser: state.user.currentUser,
    // itemCount: state.cart.reduce(
    //   (accumulatedQuantity, cartItem) =>
    //     accumulatedQuantity + cartItem.quantity,
    //   0
    // ),
  };
};

export default connect(mapStateToProps)(NavbarContainer);
