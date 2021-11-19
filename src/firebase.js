import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {

    apiKey: "AIzaSyABpVp5KmfPyeoLO_7X4oBEGlsXPl0hWZg",
  
    authDomain: "bookshelfapp-a33ab.firebaseapp.com",
  
    projectId: "bookshelfapp-a33ab",
  
    storageBucket: "bookshelfapp-a33ab.appspot.com",
  
    messagingSenderId: "613822505685",
  
    appId: "1:613822505685:web:dbd6c5d8b0be79218ff85c"
  
  };
  
  firebase.initializeApp(firebaseConfig)

  export default firebase; 