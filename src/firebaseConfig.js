// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS08Sj0GPK1D4TUjtL5U9OOGWPvwuat4w",
  authDomain: "hospital-locator-e852c.firebaseapp.com",
  projectId: "hospital-locator-e852c",
  storageBucket: "hospital-locator-e852c.firebasestorage.app",
  messagingSenderId: "960404782385",
  appId: "1:960404782385:web:455a76f1cf22efd2bc0410",
  measurementId: "G-5YR75VKDRT"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider }; 