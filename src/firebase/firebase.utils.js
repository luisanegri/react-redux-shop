import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDBDi3FZDe-HZfzwgZXi8g9Xez7XeknSw8',
  authDomain: 'ecom-react-shop.firebaseapp.com',
  databaseURL: 'https://ecom-react-shop.firebaseio.com',
  projectId: 'ecom-react-shop',
  storageBucket: 'ecom-react-shop.appspot.com',
  messagingSenderId: '774579999288',
  appId: '1:774579999288:web:fd8f668ee4c74b1eac0ccd',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // store in userRef the userAuth.uid
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // store in snapShot user object from get request
  const snapShot = await userRef.get();

  // if there is no user, creates a new user
  // on the firebase db
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  // add multiple obj at the same time to firestore
  const batch = firestore.batch();
  // loop through each obj
  objectsToAdd.forEach((obj) => {
    // create a new document reference and generate a new id for each obj
    const newDocRef = collectionRef.doc();
    // set each newDocRef to each obj looped through
    batch.set(newDocRef, obj);
  });
  // fireoff the batch request
  return await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
