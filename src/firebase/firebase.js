import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//import storage from firestore
const firebaseConfig = {
  apiKey: "AIzaSyAbPCs8YSCkr3LZbJfjM9QHKz2OeVB0k2M",
  authDomain: "yoomart-20fc3.firebaseapp.com",
  projectId: "yoomart-20fc3",
  storageBucket: "yoomart-20fc3.appspot.com",
  messagingSenderId: "51387901060",
  appId: "1:51387901060:web:bb5ede0c5455c924404ed1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
