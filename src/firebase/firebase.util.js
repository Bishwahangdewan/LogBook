import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDoPSGaxWuBC1wpXC5hQtg6uqCfCSzvx20",
    authDomain: "logbook-67e16.firebaseapp.com",
    projectId: "logbook-67e16",
    storageBucket: "logbook-67e16.appspot.com",
    messagingSenderId: "75168926577",
    appId: "1:75168926577:web:94cdb60fefa193c43984d0"
}

const app = initializeApp(config);

const db = getFirestore(app);

export { db, collection, addDoc, getDocs };