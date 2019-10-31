export function addWish(product, id) {
  return {
    type: "ADD_WISH",
    payload: {
      product,
      id
    }
  };
}
