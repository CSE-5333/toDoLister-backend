const express = require('express')
const cors = require('cors')


const userRoutes = require("./routes/user")
const itemRoutes = require("./routes/item")
const middleware = require('./middleware/middleware')

//let defaultAuth = getAuth(defaultApp)
//let defaultDatabase = getDatabase(defaultApp)

const app = express();
app.use(express.json());
app.use(cors({origin: true}));
app.use(middleware.decodeToken)




app.use("/user", userRoutes);
app.use("/item", itemRoutes);



app.listen(5000, ()=>console.log("Server running at 5000"))