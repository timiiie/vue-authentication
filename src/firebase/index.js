
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDun1edZ580MlPGCj1LARAp2SzRhfAv8vk",
  authDomain: "vue-fire-auth-27d98.firebaseapp.com",
  projectId: "vue-fire-auth-27d98",
  storageBucket: "vue-fire-auth-27d98.appspot.com",
  messagingSenderId: "849108291762",
  appId: "1:849108291762:web:fa4c68fc8eb45cf44bf9ab",
  measurementId: "G-DX1P0H1C9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth( app );
const analytics = getAnalytics(app);

export { auth }