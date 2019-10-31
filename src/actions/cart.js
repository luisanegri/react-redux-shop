export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function addToCart(product, id) {
  return {
    type: 'ADD_TO_CART',
    payload: { product, id }
  };
}

export const deleteFromCart = id => {
  console.log('id????????', id);
  return {
    type: 'REMOVE_FROM_CART',
    payload: id
  };
};
