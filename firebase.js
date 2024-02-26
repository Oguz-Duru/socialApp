import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCpEG65hXH17BS4CBxtf7e5rzLXAcjKEgQ",
    authDomain: "fir-denemesi-a3cde.firebaseapp.com",
    databaseURL: "https://fir-denemesi-a3cde-default-rtdb.firebaseio.com",
    projectId: "fir-denemesi-a3cde",
    storageBucket: "fir-denemesi-a3cde.appspot.com",
    messagingSenderId: "294939642302",
    appId: "1:294939642302:web:d9559d4a3ebee1e8e291ef",
    measurementId: "G-FGBDEY86PZ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



