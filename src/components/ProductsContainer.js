import React from "react";
import { connect } from "react-redux";
import ProductsList from "./ProductsList";
import { getProducts } from "../actions/products";

class ProductsContainer extends React.Component {
  componentDidMount() {
    //   console.log('hi')
    this.props.getProducts();
  }

  render() {
    console.log("Product details");
    if (!this.props.products) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <ProductsList products={this.props.products} />
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    products: state.products
  };
};
// If we bind action creators using connect,
// this.props.dispatch is no longer available.
export default connect(
  mapStateToProps,
  { getProducts }
)(ProductsContainer);
