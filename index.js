const express = require('express')
const cors = require('cors')
const db = require("./database")

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

app.post('/signup', (req, res) => {
    (async () => {
        try {
          await db.collection('users').doc('/' + req.body.Email + '/')
              .create(req.body);
          return res.status(200).send();
        } catch (error) {
          console.log(error);
          return res.status(500).send(error);
        }
      })();
  });

app.listen(5000, ()=>console.log("Server running at 5000"))