// import axios from 'axios';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../firebase/firebase.utils';

const baseURL = 'https://ecom-react-shop.firebaseio.com';

export const setProducts = (products) => {
  console.log('action', products);
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  };
};

export const getProducts = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('products');
    // is there correct? getting full thing from firebase
    console.log('collectionRef', collectionRef);

    collectionRef.get().then((snapshot) => {
      const products = convertCollectionsSnapshotToMap(snapshot);
      console.log('getProducts', products);
      dispatch(setProducts(products));
    });
  };
};
