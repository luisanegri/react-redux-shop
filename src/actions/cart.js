export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const TOTAL = 'TOTAL';

export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    payload: product
  };
}

export const deleteFromCart = id => {
  console.log('id????????', id);
  return {
    type: 'REMOVE_FROM_CART',
    payload: id
  };
};

export const increment = (id, val) => {
  console.log('quantity?', id, val);
  return {
    type: 'INCREMENT',
    payload: {
      quantity: val,
      id: id
    }
  };
};

export const decrement = (id, val) => {
  console.log('quantity?', id, val);
  return {
    type: 'DECREMENT',
    payload: {
      quantity: val,
      id: id
    }
  };
};

export const total = (quantity, price, id, total) => {
  return {
    type: 'TOTAL',
    payload: {
      quantity,
      price,
      id,
      total: quantity * price
    }
  };
};

// export const calculateTotal = (quantity, ) => {
//   console.log('quantity?', id, val);
//   return {
//     type: 'DECREMENT',
//     payload: {
//       quantity: val,
//       id: id
//     }
//   };
// };
