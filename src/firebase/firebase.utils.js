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

export const createUserProfile = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const {displayName, email} = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		}catch( err ) {
			console.log('error creating user');
			console.error(err);
		}

	}

	return userRef;

}
firebase.initializeApp(config);


// Make new collection and add to firebase
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach( object=>{
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, object);
	})

	return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map( doc => {

		const {items} = doc.data();
		let {title } = doc.data();
		title = title.en;
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		}
	})
	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;