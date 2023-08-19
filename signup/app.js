import { getAuth,createUserWithEmailAndPassword  } from "../firebaseConfig.js";

const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const repeatPassword = document.querySelector('#repeatPassword')
const signupBtn = document.querySelector ('.signupBtn')
// console.log(signupBtn)
// console.log(email)
// console.log(password)
// console.log(firstName)
// console.log(lastName)




const auth = getAuth();

signupBtn.addEventListener('click',()=>{
createUserWithEmailAndPassword(auth, email.value, password.value)
.then((userCredential) => {
  
    const user = userCredential.user;
    console.log(user)
    window.location.href = '../login/login.html'
    
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    
});

})



const loginBtn = document.querySelector('#loginBtn')

 

loginBtn.addEventListener('click',()=>{
    window.location.href='../login/login.html'
    console.log('funcationok');
})