const express = require("express");
const router = express.Router();
const { FieldValue } = require('firebase-admin/firestore');


const db = require("../database")

// The route itme/additem works for both adding new item to the list as well as removing an item from the list
router.post('/additem', (req, res) => {

  key = Object.keys(req.body)
  //console.log(key);
  //console.log(key[0]);
  if(key[0] == 'NaN'){
     return res.status(200).send();
  }
  // console.log(key)
  // console.log(value)
  (async () => {
    try {
      //console.log(req.body)
      itemref = await db.collection('todolist').doc('/' + req.user.uid + '/').set(req.body, { merge: true });
      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});


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
          //console.log(doc.data());
          key1 = Object.keys(doc.data());
          values1 = Object.values(doc.data());
          
          result = []
            
          for (let i = key1.length-1 ; i >=0; i--) {
            result.push({
              'id':key1[i],
              'text':values1[i]
            })
          }
          //console.log(result)

          res.status(200).send(result);
        }

      }
      catch (e) {
        console.log(e)
        res.status(500).send(e)

      }

    })();
})

router.post('/deleteitem', (req, res) => {
  (async () => {
    const _id = req.body.listid
    try {
      await db.collection('todolist').doc('/' + req.user.uid + '/').update({ [_id]: FieldValue.delete() });

      return res.status(200).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});


module.exports = router;