export function addWish(product, id) {
  return {
    type: 'ADD_WISH',
    payload: {
      product,
      id
    }
  };
}

export const deleteFromWishList = id => {
  return {
    type: 'REMOVE_FROM_WISH_LIST',
    payload: id
  };
};
