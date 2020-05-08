export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const TOTAL = 'TOTAL';

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: item,
});

export const deleteFromCart = (id) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: id,
  };
};

export const increment = (id, val) => {
  return {
    type: 'INCREMENT',
    payload: {
      quantity: val,
      id: id,
    },
  };
};

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
