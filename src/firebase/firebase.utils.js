import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDQHDiriGOs-zdcWAlxWriFDjJaDzHliQ4",
    authDomain: "clothing-store-e56b9.firebaseapp.com",
    databaseURL: "https://clothing-store-e56b9.firebaseio.com",
    projectId: "clothing-store-e56b9",
    storageBucket: "clothing-store-e56b9.appspot.com",
    messagingSenderId: "611196252679",
    appId: "1:611196252679:web:2dcafee0cabe2142f2b0a2",
    measurementId: "G-5KL9D9VDMF"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch(err) {
        console.log('Error creating user', err.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;