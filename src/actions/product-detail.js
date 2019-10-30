import superagent from 'superagent';

export const SET_PRODUCT_DETAILS = 'SET_PRODUCT_DETAILS';

// synchronous action
export function setProductsDetails(product) {
  return {
    type: 'SET_PRODUCTS_DETAILS',
    payload: product
  };
}

// FETCH
// Async action, which dispatches a synchronous action when it has fetched the data
export function getProductDetail(productId) {
  return function(dispatch) {
    superagent(`http://localhost:4000/products/${productId}`)
      .then(response => response.body)
      .then(product => {
        console.log('product', product);
        dispatch(setProductsDetails(product));
        console.log('product?????', product);
      });
  };
}
