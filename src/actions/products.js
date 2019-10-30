import superagent from 'superagent';

export const SET_PRODUCTS = 'SET_PRODUCTS';

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

// https://jsonplaceholder.typicode.com/photos?albumId=${albumId}
