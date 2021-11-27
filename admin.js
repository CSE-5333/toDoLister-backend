const admin = require('firebase-admin');

const serviceAccount = require('./permission.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://todolister-b1fb8-default-rtdb.firebaseio.com"
});

module.exports = admin;