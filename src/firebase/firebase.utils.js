import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyAer6Lh6N5FYVArUhIaUt8raF_YMV75FbY',
  authDomain: 'react-store-1cb07.firebaseapp.com',
  projectId: 'react-store-1cb07',
  storageBucket: 'react-store-1cb07.appspot.com',
  messagingSenderId: '1096546508804',
  appId: '1:1096546508804:web:2a6205c7c34d9f8c5e9551',
  measurementId: 'G-Y06L4P658H',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
