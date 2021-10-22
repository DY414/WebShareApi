import firebase from "firebase/app";
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyD_3ZQcLj9rnztS6j3HbCKBqfSuDiAoBfw",
  authDomain: "todo-test-8321a.firebaseapp.com",
  projectId: "todo-test-8321a",
  storageBucket: "todo-test-8321a.appspot.com",
  messagingSenderId: "292586072135",
  appId: "1:292586072135:web:05a6f8b4714ea3d5a0e962"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db };