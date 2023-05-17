import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCywX-UeXQhSTOS2JkD0vYJgAzquQu196M",
  authDomain: "expense-tracker2-20e1f.firebaseapp.com",
  projectId: "expense-tracker2-20e1f",
  storageBucket: "expense-tracker2-20e1f.appspot.com",
  messagingSenderId: "851027569451",
  appId: "1:851027569451:web:ad53b1640bf6d6078af36e",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { firebase, db, auth };
