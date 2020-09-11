import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyD6UbcNRYQOLquj8ewIDnLrJN2XpDb5mUM",
  authDomain: "business-model-fa806.firebaseapp.com",
  databaseURL: "https://business-model-fa806.firebaseio.com",
  projectId: "business-model-fa806",
  storageBucket: "business-model-fa806.appspot.com",
  messagingSenderId: "341766170516",
  appId: "1:341766170516:web:9794898598bc3388605181"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };