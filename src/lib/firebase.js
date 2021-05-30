import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWZLqzs2DpLKojyqDL5jVC6xGGiXoKZts",
  authDomain: "bajar-a18c1.firebaseapp.com",
  projectId: "bajar-a18c1",
  storageBucket: "bajar-a18c1.appspot.com",
  messagingSenderId: "124127641798",
  appId: "1:124127641798:web:2d4d65ae1b2b09791117c7"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
