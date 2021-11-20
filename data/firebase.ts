import { initializeApp } from "firebase/app"
import "firebase/firestore";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAmehS4_4dVWmlzquTzK88SPPFEskjBTp8",
  authDomain: "avalie-ef6ea.firebaseapp.com",
  projectId: "avalie-ef6ea",
  storageBucket: "avalie-ef6ea.appspot.com",
  messagingSenderId: "98167115172",
  appId: "1:98167115172:web:c49dfd9e344fda580e8531",
  measurementId: "G-NV204VWN4X"
};

const app = initializeApp(config);
export default app;