export const addWish = (item) => ({
  type: 'ADD_WISH',
  payload: item,
});

export const deleteFromWishList = (id) => ({
  type: 'REMOVE_FROM_WISH_LIST',
  payload: id,
});
