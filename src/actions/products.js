export const SET_PRODUCTS = "SET_PRODUCTS";

export function setProducts(products) {
  return {
    type: "SET_PRODUCTS",
    payload: {
      products
    }
  };
}
export function getProducts() {
  return function(dispatch) {
    // dispatch({ type: "APP_LOADING" });
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(products => {
        console.log(products, "WAAAAA");
        dispatch(setProducts(products));
      });
  };
}

// if (getState().albums.length !== 0) return;
