import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestone";

const firebaseConfig = {
  apiKey: "AIzaSyCsb2CG5QnF2LOuUXHcY13gRyZA2yNVbBM",
  authDomain: "anime-shop-25.firebaseapp.com",
  projectId: "anime-shop-25",
  storageBucket: "anime-shop-25.appspot.com",
  messagingSenderId: "1091137306400",
  appId: "1:1091137306400:web:f49dacce1bda45cc0f2145",
  measurementId: "G-DQ2BZ0N0FV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
