<<<<<<< HEAD
export const SET_PRODUCTS = "SET_PRODUCTS";
export const ADD_WISH = "ADD_WISH";
=======
export const SET_PRODUCTS = 'SET_PRODUCTS';
>>>>>>> development

export function setProducts(products) {
  return {
    type: 'SET_PRODUCTS',
    payload: {
      products
    }
  };
}
export function getProducts() {
  return function(dispatch) {
    // dispatch({ type: "APP_LOADING" });
    fetch('http://localhost:3010/products')
      .then(res => res.json())
      .then(products => {
        console.log(products, 'WAAAAA');
        dispatch(setProducts(products));
      });
  };
}

// if (getState().albums.length !== 0) return;
