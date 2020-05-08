export const addWish = (item, id) => ({
  type: 'ADD_WISH',
  payload: item,
});

export const deleteFromWishList = (id) => {
  return {
    type: 'REMOVE_FROM_WISH_LIST',
    payload: id,
  };
};
