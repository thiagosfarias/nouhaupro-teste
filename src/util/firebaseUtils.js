import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDVY54VGZEPi6d0ACQFdAAHFpgFooebnyg",
    authDomain: "teste-nouhau.firebaseapp.com",
    databaseURL: "https://teste-nouhau.firebaseio.com",
    projectId: "teste-nouhau",
    storageBucket: "teste-nouhau.appspot.com",
    messagingSenderId: "10128049841",
    appId: "1:10128049841:web:2d64e84e81bcc061b0c490",
    measurementId: "G-KSTFEB1KQN"
};

export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const firebaseDatabase = firebase.database();