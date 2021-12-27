import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
	apiKey: 'AIzaSyCnj53cQdyZ5xO7wnOzH3Lk3dAvxSSDBc0',
	authDomain: 'peregrine-shop.firebaseapp.com',
	projectId: 'peregrine-shop',
	storageBucket: 'peregrine-shop.appspot.com',
	messagingSenderId: '10504863041',
	appId: '1:10504863041:web:52fff09e7a7cb72272f5c0',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;