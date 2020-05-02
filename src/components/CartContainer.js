import React from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';
import {
  removeProduct,
  clearProductFromCart,
  addProduct,
} from '../actions/cart';

class CartContainer extends React.Component {
  render() {
    return (
      <Cart
        cart={this.props.cart}
        removeProduct={this.props.removeProduct}
        addProduct={this.props.addProduct}
        clearProductFromCart={this.props.clearProductFromCart}
      />
    );
  }
}

const mapStateToProps = (state) => {
  console.log('cart state', state);
  return {
    cart: state.cart,
  };
};

const mapActionsToProps = () => {
  return {
    removeProduct: removeProduct,
    addProduct: addProduct,
    clearProductFromCart: clearProductFromCart,
  };
};

export default connect(mapStateToProps, mapActionsToProps())(CartContainer);
