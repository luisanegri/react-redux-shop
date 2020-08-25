import axios from 'axios';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../firebase/firebase.utils';

// const baseURL = 'https://webshop-db.herokuapp.com/products';

export const setItemDetail = (item) => ({
  type: 'SET_ITEM_DETAIL',
  payload: item,
});

export const getItemDetail = (products) => {
  const single = firestore.doc('products/0KGcc0vn6is6yxKNBU3w');
  console.log('singles', single);
  // const snapShot = await single.get();
  // console.log('snap', snapShot);
  // collectionRef.get().then((docRef) => {
  //   console.log('data', docRef);
  // });
};

// retrieve whole collection
// retrieve specific item (dynamic)
// specificItem.get().then((snapshot))

// export const getProducts = () => {
//   return (dispatch) => {
//     const collectionRef = firestore.collection('products');
//     // is there correct? getting full thing from firebase
//     collectionRef.get().then((snapshot) => {
//       const products = convertCollectionsSnapshotToMap(snapshot);
//       dispatch(setProducts(products));
//     });
//   };
// };
