import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// function initializeAppIfNecessary() {
//   try {
//     return getApp();
//   } catch (any) {
//     const firebaseConfig = {
//       apiKey: process.env.REACT_APP_apiKey,
//       authDomain: process.env.REACT_APP_authDomain,
//       projectId: process.env.REACT_APP_projectId,
//       storageBucket: process.env.REACT_APP_storageBucket,
//       messagingSenderId: process.env.REACT_APP_messagingSenderId,
//       appId: process.env.REACT_APP_appId,
//       measurementId: process.env.REACT_APP_measurementId,
//     };
//     return initializeApp(firebaseConfig);
//   }
// }
const firebaseConfig = {
    apiKey: "AIzaSyAUSnOtdfMwccX7mMySW7YS-Ui-B0Vnxjg",
    authDomain: "keepclone-d0dce.firebaseapp.com",
    projectId: "keepclone-d0dce",
    storageBucket: "keepclone-d0dce.appspot.com",
    messagingSenderId: "135573084227",
    appId: "1:135573084227:web:fe383145bd01ff22409cf6",
    measurementId: "G-SLVD3W5D8N"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
