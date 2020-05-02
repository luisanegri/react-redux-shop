// export const ADD_TO_CART = 'ADD_TO_CART';
// export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
// export const INCREMENT = 'INCREMENT';
// export const DECREMENT = 'DECREMENT';
// export const TOTAL = 'TOTAL';

export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product,
  };
};

export const clearProductFromCart = (product) => ({
  type: 'CLEAR_PRODUCT_FROM_CART',
  payload: product,
});

export const removeProduct = (product) => ({
  type: 'REMOVE_PRODUCT',
  payload: product,
});

export const total = (quantity, price) => {
  return {
    type: 'TOTAL',
    payload: {
      quantity,
      price,
      total,
    },
  };
};

// export const deleteFromCart = (id) => {
//   return {
//     type: 'REMOVE_FROM_CART',
//     payload: id,
//   };
// };

// export const increment = (id, val) => {
//   return {
//     type: 'INCREMENT',
//     payload: {
//       quantity: val,
//       id: id
//     }
//   };
// };
