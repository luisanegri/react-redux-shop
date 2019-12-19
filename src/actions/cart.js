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
  return {
    type: 'REMOVE_FROM_CART',
    payload: id
  };
};

export const increment = (id, val) => {
  return {
    type: 'INCREMENT',
    payload: {
      quantity: val,
      id: id
    }
  };
};

export const decrement = (id, val) => {
  console.log('decrement quantity?', id, val);
  return {
    type: 'DECREMENT',
    payload: {
      quantity: val,
      id: id
    }
  };
};

export const total = (quantity, price) => {
  return {
    type: 'TOTAL',
    payload: {
      quantity,
      price,
      total
    }
  };
};
