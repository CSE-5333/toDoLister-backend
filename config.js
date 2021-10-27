
const firebase = require('firebase-admin');

const firebaseConfig = {
    apiKey: "AIzaSyBhRsKOuqlx62Lrd3MV6BHKk7r7PJ_X0e8",
    authDomain: "todolister-b1fb8.firebaseapp.com",
    databaseURL: "https://todolister-b1fb8-default-rtdb.firebaseio.com",
    projectId: "todolister-b1fb8",
    storageBucket: "todolister-b1fb8.appspot.com",
    messagingSenderId: "448971555273",
    appId: "1:448971555273:web:2f101dea877e7bb99e6818",
    measurementId: "G-6TD0N8PJ49"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
//const UserDb = db.ref("/users");


module.exports = db;