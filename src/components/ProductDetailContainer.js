import React from 'react';
import { connect } from 'react-redux';
import ProductDetail from './ProductDetail';
import { getProductDetail } from '../actions/product-detail';
import { addToCart } from '../actions/cart';
import { addWish } from '../actions/wish';

class ProductDetailContainer extends React.Component {
  componentDidMount() {
    const productId = this.props.match.params.id;
    this.props.getProductDetail(productId);
  }

  render() {
    if (!this.props.product.name) return 'Loading';
    return (
      <div>
        <ProductDetail
          product={this.props.product}
          addToCart={this.props.addToCart}
          addWish={this.props.addWish}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.productDetail,
    cart: state.cart,
    wish: state.wish
  };
};

const mapActionsToProps = () => {
  return {
    getProductDetail: getProductDetail,
    addToCart: addToCart,
    addWish: addWish
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps()
)(ProductDetailContainer);
