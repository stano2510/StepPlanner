// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoHcH7SxBXNj6niod8BC22MMg3NWeDAfA",
  authDomain: "steps-planner.firebaseapp.com",
  projectId: "steps-planner",
  storageBucket: "steps-planner.appspot.com",
  messagingSenderId: "839259498951",
  appId: "1:839259498951:web:a15716b0419f4a040b11e2",
};

let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
