import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// require("dotenv").config();
// import dotenv from "dotenv-webpack";

// import { getAnalytics } from "firebase/analytics";
const firebaseApp = {
  // apiKey: "<%= process.env.REACT_APP_FIREBASE_API_KEY %>",
  // // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: "<%= process.env.REACT_APP_FIREBASE_AUTH_DOMAIN %>",
  // // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // // projectId: "<%= process.env.REACT_APP_FIREBASE_PROJECT_ID%>",
  // projectId: "<%= process.env.REACT_APP_FIREBASE_PROJECT_ID%>",
  // storageBucket: "<%= process.env.REACT_APP_FIREBASE_STORAGE_BUCKET%>",
  // messagingSenderId: "<%= process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID%>",
  // appId: "<%= process.env.REACT_APP_FIREBASE_APP_ID%>",
  // measurementId: "<%= process.env.REACT_APP_FIREBASE_MEASUREMENT_ID%>",
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// var db = firebaseApp.firestore();
const app = initializeApp(firebaseApp);
const db = getFirestore(app);

// export default { db };
export { db };

// const analytics = getAnalytics(app);
