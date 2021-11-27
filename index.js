const express = require('express')
const cors = require('cors')


const itemRoutes = require("./routes/item")
const middleware = require('./middleware/middleware')

const app = express();
app.use(express.json());
app.use(cors({origin: true}));
app.use(middleware.decodeToken)

app.use("/item", itemRoutes);




app.listen(5000, ()=>console.log("Server running at 5000"))