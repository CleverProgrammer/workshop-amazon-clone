import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyAFoA3dnrns2YQ9y1rZ7W5W2iZZVPnLwUg",
    authDomain: "clone-3e829.firebaseapp.com",
    projectId: "clone-3e829",
    storageBucket: "clone-3e829.appspot.com",
    messagingSenderId: "903329302770",
    appId: "1:903329302770:web:75ba1f8940fff3077de86b",
    measurementId: "G-1HFYB1PGGW"
})

const db = firebase.firestore();

export { db }


