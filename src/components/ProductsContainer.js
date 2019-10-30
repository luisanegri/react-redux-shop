import React from 'react';
import { connect } from 'react-redux';
import Products from './Products';

class ProductsContainer extends React.Component {
  componentDidMount() {
    //   console.log('hi')
  }

  render() {
    console.log('Product details');
    if (!this.props.products) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <Products products={this.props.products} />
        </div>
      );
    }
  }
}

// If we bind action creators using connect,
// this.props.dispatch is no longer available.
export default connect()(ProductsContainer);
