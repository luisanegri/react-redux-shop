export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: item,
});

export const deleteFromCart = (item) => ({
  type: 'DELETE_FROM_CART',
  payload: item,
});

export const removeItem = (item) => ({
  type: 'REMOVE_ITEM',
  payload: item,
});
