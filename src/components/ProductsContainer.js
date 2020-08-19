import React from 'react';
import { connect } from 'react-redux';
import ProductsList from './ProductsList';
import { getProducts } from '../actions/products';

class ProductsContainer extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <ProductsList products={this.props.products} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    products: state.products.productsList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProducts: (products) => dispatch(getProducts(products)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
