const admin = require('firebase-admin');
const key = require("./keys");


//const serviceAccount = require('./permission.json');
const serviceAccount = {
    "type": key.type,
    "project_id": key.project_id,
    "private_key_id": key.private_key_id,
    "private_key": key.private_key,
    "client_email": key.client_email,
    "client_id": key.client_id,
    "auth_uri": key.auth_uri,
    "token_uri": key.token_uri,
    "auth_provider_x509_cert_url": key.auth_provider_x509_cert_url,
    "client_x509_cert_url":key.client_x509_cert_url
}

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://todolister-b1fb8-default-rtdb.firebaseio.com"
});

module.exports = admin;