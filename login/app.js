import { getAuth,signInWithEmailAndPassword } from "../firebaseConfig.js";
const loginBtn = document.querySelector('.loginBtn')
const signupBtn = document.querySelector('#signupBtn')
const email = document.querySelector('.email')
const password = document.querySelector('.password')


loginBtn.addEventListener('click', ()=>{
    

const auth = getAuth();
signInWithEmailAndPassword( auth, email.value, password.value)
  .then((userCredential) => {
   
    const user = userCredential.user;
    console.log(user)
    window.location.href ='../dashboard/index.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
})

signupBtn.addEventListener('click',()=>{
    window.location.href='../signup/index.html'
    console.log('funcationok');
})