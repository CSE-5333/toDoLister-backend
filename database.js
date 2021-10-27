const admin = require('firebase-admin');
var serviceAccount = require("./permission.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://todolister-b1fb8-default-rtdb.firebaseio.com"
});
const db = admin.firestore();

module.exports = db