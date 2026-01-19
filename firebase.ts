import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAe46IETeds_rclGz_Xjkv1jz00DctSss0",
  authDomain: "bidspark365-3a5b7.firebaseapp.com",
  projectId: "bidspark365-3a5b7",
  storageBucket: "bidspark365-3a5b7.firebasestorage.app",
  messagingSenderId: "551753538294",
  appId: "1:551753538294:web:a5780dbc0d43cdc2deead7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
