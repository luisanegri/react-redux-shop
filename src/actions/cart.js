export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const TOTAL = 'TOTAL';

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: item,
});

export const deleteFromCart = (item) => ({
  type: 'DELETE_FROM_CART',
  payload: item,
});

export const decrement = (id, val) => {
  return {
    type: 'DECREMENT',
    payload: {
      quantity: val,
      id: id,
    },
  };
};

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
