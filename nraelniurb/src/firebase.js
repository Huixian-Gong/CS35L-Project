// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
apiKey: "AIzaSyBP1I5s_9VpnfDV-75N7WqTVuf7iOyJ6I8",
authDomain: "nraelnuirb-2b2f8.firebaseapp.com",
projectId: "nraelnuirb-2b2f8",
storageBucket: "nraelnuirb-2b2f8.appspot.com",
messagingSenderId: "753155876766",
appId: "1:753155876766:web:eb1df9d67b5c2ef127188f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
export const db = getFirestore(app)


