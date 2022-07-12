// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaQiLGCu_4pgqv0V-rGzyqIADkj3EEMgU",
  authDomain: "euradar-fbe69.firebaseapp.com",
  projectId: "euradar-fbe69",
  storageBucket: "euradar-fbe69.appspot.com",
  messagingSenderId: "831104749934",
  appId: "1:831104749934:web:70a228b368751fd007f17f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

export function signup(email, password){
    createUserWithEmailAndPassword(authentication, email, password);
}
