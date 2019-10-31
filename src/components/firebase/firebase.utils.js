import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCxO7yWiFEDGlSpe6AluHXgGPBtZSAMo6Y",
    authDomain: "clothind-db.firebaseapp.com",
    databaseURL: "https://clothind-db.firebaseio.com",
    projectId: "clothind-db",
    storageBucket: "clothind-db.appspot.com",
    messagingSenderId: "95618321711",
    appId: "1:95618321711:web:01f982abcc09ec785fa5da",
    measurementId: "G-2J2TNCQBK7"
  }

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;