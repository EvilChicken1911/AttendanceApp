import * as firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyA06P4NjiFMd0ZxbAJN5S7u89Kg7VVlmwg",
    authDomain: "attendance-app-55ed6.firebaseapp.com",
    databaseURL: "https://attendance-app-55ed6-default-rtdb.firebaseio.com/"
,    projectId: "attendance-app-55ed6",
    storageBucket: "attendance-app-55ed6.appspot.com",
    messagingSenderId: "140567679633",
    appId: "1:140567679633:web:c4c77832a4466cd97f6530"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig); 
export default firebase.database(); console.log(firebase.name); console.log(firebase.database());

