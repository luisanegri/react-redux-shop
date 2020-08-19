import React from 'react';
import { connect } from 'react-redux';
import ProductsList from './ProductsList';
import { createStructuredSelector } from 'reselect';
import { selectProductsForPreview } from '../reducers/products.selector';
// import { getProducts } from '../actions/products';

class ProductsContainer extends React.Component {
  // componentDidMount() {
  //   this.props.getProducts();
  // }

  render() {
    return (
      <div>
        <ProductsList products={this.props.products} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  products: selectProductsForPreview,
});

// const mapDispatchToProps = (dispatch) => ({
//   getProducts: (products) => dispatch(getProducts(products)),
// });

export default connect(mapStateToProps, null)(ProductsContainer);
