import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDM-ZRkoFiEEbu5gFC1SifcRM99BGIlAYI",
  authDomain: "spendify-8597c.firebaseapp.com",
  projectId: "spendify-8597c",
  storageBucket: "spendify-8597c.appspot.com",
  messagingSenderId: "612381357002",
  appId: "1:612381357002:web:eaaa3e5d802c83b7a4d533",
};

//init firebase

firebase.initializeApp(firebaseConfig);

//init survice

const projectFirebase = firebase.firestore();

export { projectFirebase };
