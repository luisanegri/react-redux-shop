import React from 'react';
import { connect } from 'react-redux';
import ProductDetail from './ProductDetail';
import { getItemDetail } from '../actions/product-detail';
import { addItem } from '../actions/cart';
import { addWish } from '../actions/wish';

class ProductDetailContainer extends React.Component {
  componentDidMount() {
    const productId = this.props.match.params.id;
    this.props.itemDetail(productId);
  }

  render() {
    return (
      <div>
        <ProductDetail
          product={this.props.product}
          addItem={this.props.addItem}
          addWish={this.props.addWish}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('product detail container state', state);
  return {
    product: state.productDetail,
    cart: state.cart,
  };
};

// const mapActionsToProps = (dispatch) => {
//   console.log('dispatch', dispatch);
//   return {
//     getProductDetail: getProductDetail,
//     addWish: addWish,
//     addItem: addItem,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  console.log('dispatchtoprops', dispatch);
  return {
    itemDetail: (item) => dispatch(getItemDetail(item)),
    addItem: (item) => dispatch(addItem(item)),
    addWish: (item) => dispatch(addWish(item)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailContainer);
