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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error){
            console.log('error creating user', error.message);
        }
        
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;