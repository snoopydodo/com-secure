import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCDRpLqGZT6NURdGqQ55TJ658tW7PRVm_Y",
  authDomain: "com--dev.firebaseapp.com",
  projectId: "com--dev",
  storageBucket: "com--dev.appspot.com",
  messagingSenderId: "339524444876",
  appId: "1:339524444876:web:5b5420fcf4816e55375869",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
