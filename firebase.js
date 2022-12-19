
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, doc, addDoc } from 'firebase/firestore/lite';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvu2vXnZEJtKrKFE-Dn-wRKzrKYM9YrWs",
  authDomain: "whatsapp-amharic-version.firebaseapp.com",
  projectId: "whatsapp-amharic-version",
  storageBucket: "whatsapp-amharic-version.appspot.com",
  messagingSenderId: "784804013345",
  appId: "1:784804013345:web:4020c2b39b63d580820a60",
  measurementId: "G-MKDSLRHKR3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const signInPopup = signInWithPopup;
const getDBCollection = collection;
const getFBDocs = getDocs;
const setFBDoc = setDoc;
const docInstance = doc;
const addNewDoc  = addDoc;




// Get a list of cities from your database
/*
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}*/

export { app, db, docInstance, getDBCollection, getFBDocs, setFBDoc, addNewDoc, auth, provider, signInPopup};
