import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyApeuaG92j7SlYwtiPfhgd0-EjXbBYV7Fk",
    authDomain: "crwn-db-3ec11.firebaseapp.com",
    projectId: "crwn-db-3ec11",
    storageBucket: "crwn-db-3ec11.appspot.com",
    messagingSenderId: "741356294133",
    appId: "1:741356294133:web:3079544a8e36a56e5d9abc",
    measurementId: "${config.measurementId}"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;