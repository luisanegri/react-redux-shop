import React from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';
import { deleteFromCart, addItem, decrement, total } from '../actions/cart';

class CartContainer extends React.Component {
  componentDidMount() {
    total();
  }
  render() {
    return (
      <Cart
        cart={this.props.cart}
        deleteFromCart={this.props.deleteFromCart}
        addItem={this.props.addItem}
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

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

// const mapActionsToProps = () => {
//   return {
//     deleteFromCart: deleteFromCart,
//     increment: increment,
//     decrement: decrement,
//     total: total,
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
