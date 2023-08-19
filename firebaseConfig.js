import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDWv8Udg_zJ3CW6PlVgx5AQnaB7EW4KROY",
    authDomain: "hackathon-88e02.firebaseapp.com",
    projectId: "hackathon-88e02",
    storageBucket: "hackathon-88e02.appspot.com",
    messagingSenderId: "659048767969",
    appId: "1:659048767969:web:a15843ceeeda984186b2a0"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export{
    getAuth,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  }
