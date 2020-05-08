import React from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';
import { deleteFromCart, increment, decrement, total } from '../actions/cart';

class CartContainer extends React.Component {
  componentDidMount() {
    total();
  }
  render() {
    return (
      <Cart
        cart={this.props.cart}
        deleteFromCart={this.props.deleteFromCart}
        increment={this.props.increment}
        decrement={this.props.decrement}
        total={this.props.total}
      />
    );
  }
}

const mapStateToProps = (state) => {
  console.log('cart container state', state);
  return {
    cart: state.cart,
  };
};

const mapActionsToProps = () => {
  return {
    deleteFromCart: deleteFromCart,
    increment: increment,
    decrement: decrement,
    total: total,
  };
};

export default connect(mapStateToProps, mapActionsToProps())(CartContainer);
