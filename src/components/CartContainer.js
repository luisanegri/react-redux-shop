import React from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';
import { deleteFromCart, addItem, decrement } from '../actions/cart';

class CartContainer extends React.Component {
  render() {
    return (
      <Cart
        cart={this.props.cart}
        deleteFromCart={this.props.deleteFromCart}
        addItem={this.props.addItem}
        decrement={this.props.decrement}
        cartTotal={this.props.cartTotal}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    cartTotal: state.cart.cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
      0
    ),
  };
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  deleteFromCart: (item) => dispatch(deleteFromCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
