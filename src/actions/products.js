// import axios from 'axios';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../firebase/firebase.utils';

export const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  };
};

export const getProducts = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('products');
    console.log('collectionRef in products', collectionRef);
    // is there correct? getting full thing from firebase
    collectionRef.get().then((snapshot) => {
      const products = convertCollectionsSnapshotToMap(snapshot);
      dispatch(setProducts(products));
    });
  };
};
