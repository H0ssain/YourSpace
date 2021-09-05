import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyCu6YUHGl1s7Sn01GFhYi6_b8_eAMbfS-Y",
  authDomain: "hotel-ee080.firebaseapp.com",
  projectId: "hotel-ee080",
  storageBucket: "hotel-ee080.appspot.com",
  messagingSenderId: "501963540270",
  appId: "1:501963540270:web:9d5f6bb3ec7089b9c85cbf"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 