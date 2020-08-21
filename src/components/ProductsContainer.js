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
        <ProductsList
          products={this.props.products}
          loading={this.props.loading}
          errorMessage={this.props.errorMessage}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ products }) => {
  return {
    products: products.productsList,
    loading: products.loading,
    errorMessage: products.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProducts: (products) => dispatch(getProducts(products)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
