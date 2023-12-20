const express = require("express");
const cors = require("cors");

const { userRoutes } = require("./routes/users.routes");
const { Connection } = require("./db");
const { todoRoutes } = require("./routes/todos.routes");

const app = express();
app.use(express.json());

app.use(cors())

app.use("/users", userRoutes)
app.use("/todos",todoRoutes)


app.listen(process.env.PORT,async()=>{
    try{
        await Connection
        console.log("Mongodb atlas is connected ");
        console.log("Server is Conntected");
    }catch(err){
        console.log(err);
    }
})