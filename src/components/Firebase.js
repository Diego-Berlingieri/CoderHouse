import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDLJBCwL-TKgATNGc6T2s2cveKqSJD9kAE",
    authDomain: "diegoberlingieri-77aa6.firebaseapp.com",
    projectId: "diegoberlingieri-77aa6",
    storageBucket: "diegoberlingieri-77aa6.appspot.com",
    messagingSenderId: "169923766283",
    appId: "1:169923766283:web:7377f17cf98b7fe298ff0e"
   
})

export function getFirebase() {
    return app
} 

export function getFirestore(){
    return firebase.firestore(app)
} 
