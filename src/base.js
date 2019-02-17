import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBdA54fd-i1jiuj0xoC-9bGaFh17eaqfl4",
    authDomain: "catch-of-the-day-16271.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-16271.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a name export
export { firebaseApp };

// This is a default export
export default base;