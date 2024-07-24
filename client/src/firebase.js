import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_HkiGWeFM8bijZYjUur2cC4Z9a2FQQb4",
  authDomain: "median-app-c72cd.firebaseapp.com",
  projectId: "median-app-c72cd",
  storageBucket: "median-app-c72cd.appspot.com",
  messagingSenderId: "878076428275",
  appId: "1:878076428275:web:fb1f3fa2a4eb94fca3dc86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
