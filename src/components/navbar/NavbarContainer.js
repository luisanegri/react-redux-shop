import React, { Component } from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';

class NavbarContainer extends Component {
  render() {
    return (
      <div>
        <NavBar
          cart={this.props.cart}
          currentUser={this.props.user}
          itemCount={this.props.itemCount}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ cart, user }) => ({
  cart,
  user: user.currentUser,
  itemCount: cart.cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  ),
});

export default connect(mapStateToProps)(NavbarContainer);
