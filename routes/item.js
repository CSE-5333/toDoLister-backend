const express = require("express");
const router = express.Router();
const {FieldValue} = require('firebase-admin/firestore');

const db = require("../database")
router.post('/additem', (req, res) => {
  (async () => {
    try {
      itemref = await db.collection('todolist').doc('/' + req.user.uid + '/').set(req.body, { merge: true });
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});


router.post('/deleteitem', (req, res) => {
  (async () => {
    listid = req.body.listid
    try {
      await db.collection('todolist').doc('/' + req.user.uid + '/').update({list2:FieldValue.delete()});

      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});


module.exports = router;