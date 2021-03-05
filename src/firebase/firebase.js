import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb4-I0X_RcRTU_aoo-M1uG85hubNh9teA",
    authDomain: "contact-app-b542d.firebaseapp.com",
    projectId: "contact-app-b542d",
    storageBucket: "contact-app-b542d.appspot.com",
    messagingSenderId: "90054493616",
    appId: "1:90054493616:web:5b83eb3a151b21d5954275"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

export default firebase;



