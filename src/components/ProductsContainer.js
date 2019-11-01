import React from "react";
import { connect } from "react-redux";
import ProductsList from "./ProductsList";
import { getProducts } from "../actions/products";
import SearchForm from "./SearchForm";
import searchProducts from "../actions/searchProducts";

class ProductsContainer extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    if (!this.props.products) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <SearchForm
            products={this.props.products}
            searchProducts={this.props.searchProducts}
          />
          <ProductsList
            products={this.props.products}
            search={this.props.search}
          />
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    search: state.search
  };
};
// If we bind action creators using connect,
// this.props.dispatch is no longer available.
export default connect(
  mapStateToProps,
  { getProducts, searchProducts }
)(ProductsContainer);
