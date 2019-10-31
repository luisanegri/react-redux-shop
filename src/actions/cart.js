export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREMENT = 'INCREMENT';

export function addToCart(product, id, quantity) {
  return {
    type: 'ADD_TO_CART',
    payload: { product, id, quantity }
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
