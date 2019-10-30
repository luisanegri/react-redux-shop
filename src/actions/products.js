export const SET_ALBUMS = 'SET_ALBUMS';

export function setProducts(id, name, price, imageUrl, description) {
  return {
    type: 'SET_PRODUCTS',
    payload: {
      id: id,
      name: name,
      price: price,
      imageUrl: imageUrl,
      description: description
    }
  };
}
