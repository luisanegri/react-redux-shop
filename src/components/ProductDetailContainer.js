import React from 'react';
import { connect } from 'react-redux';
import ProductDetail from './ProductDetail';
import { getProductDetail } from '../actions/product-detail';
import { addToCart } from '../actions/cart';
import Cart from './Cart';

class ProductDetailContainer extends React.Component {
  componentDidMount() {
    const productId = this.props.match.params.id;
    console.log('product id?', productId);
    this.props.getProductDetail(productId);
    this.props.addToCart();
  }

  addToCart = () => {
    // this.props.addToCart(this.props.product)
    // 1. cart reducer with initial state ok
    // 2. addToCart actioncreator (function that creates an action with type payload) ok
    // 3. Import addToCart here and pass it to connect ok
    // 4. make a button ok
    // 5. Add event listener to that that calls this.props.addTocart (our action creator) -- STOPPED HERE
    // 6. Check if dispatches an action in redux devtools
    // 7. Handle action in reducer to add the product to your cart
    // 8. Check redux devtools if it is successfull
    // 9. Make a shoppingcart component where you display all the items in the cart
  };

  render() {
    console.log('AM I RENDERED', this.props);

    if (!this.props.product.name) return 'Loading';
    return (
      <div>
        <ProductDetail
          product={this.props.product}
          addToCart={this.props.addToCart}
        />
        <Cart />
      </div>
    );
  }
}

// Accessing the state using connect and mapStateToProps

// We define a function mapStateToProps that defines what part of the state
// (from the redux store) is required as data in this component.
const mapStateToProps = state => {
  console.log('mapstate', state);
  return {
    product: state.productDetail,
    cart: state.cart
  };
};

const mapActionsToProps = () => {
  return {
    getProductDetail: getProductDetail,
    addToCart: addToCart
  };
};

// connect will call the mapStateToProps after an action has been dispatched and handled
// by the reducers (like store.subscribe)
export default connect(
  mapStateToProps,
  mapActionsToProps()
)(ProductDetailContainer);

// var reduxStore = {
//   productDetail: {
//     name: 'Product 1'
//     id: 1
//   },
//   cart: []
// }

// addToCart

// <ProductDetailContainer
//   product={state.productDetail}
//   cart={state.cart}
//   addToCart={addToCart}
// />

// this.props.product
// this.props.cart
// this.props.addToCart()
