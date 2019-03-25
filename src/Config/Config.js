import firebase from 'firebase';
export const DB_CONFIG= {
    apiKey: "AIzaSyDjtRCmTJDKa4q68Si4rbQoR_cZnqzAzNE",
    authDomain: "votacion-d595f.firebaseapp.com",
    databaseURL: "https://votacion-d595f.firebaseio.com",
    projectId: "votacion-d595f",
    storageBucket: "votacion-d595f.appspot.com",
    messagingSenderId: "309639690507"
  };
const fire = firebase.initializeApp(DB_CONFIG);
export default fire;