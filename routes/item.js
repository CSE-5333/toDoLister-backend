const express = require("express");
const router = express.Router();
const { FieldValue } = require('firebase-admin/firestore');
const { reset } = require("nodemon");

const db = require("../database")

// The route itme/additem works for both adding new item to the list as well as removing an item from the list
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

// NOT Complete
router.get('/allitems', (req, res) => {
  
    (async () => {
      try {
        const doc = await db.collection('todolist').doc('/' + req.user.uid + '/').get();
        // const doc = await listref
        if (! doc.exists) {
          console.log('no such documents')
          res.status(404).send({});

        }
        else {
          console.log(doc.data())
          res.status(200).send(doc.data());
        }

      }
      catch (e) {
        console.log(e)
        res.status(500).send(e)

      }

    })();



  //res.status(200).send();
})

// NOT Complete
router.post('/deleteitem', (req, res) => {
  (async () => {
    const _id = req.body.listid
    try {
      await db.collection('todolist').doc('/' + req.user.uid + '/').update({ _id: FieldValue.delete() });

      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});


module.exports = router;