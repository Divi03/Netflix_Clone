const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/netflix",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB connected");
})
mongoose.set('strictQuery', false);
app.use("/api/user",userRoutes);

app.listen(5000,console.log("server started"));


// const url = `mongodb+srv://divi:Iy79uaMlha8nZmjh@netflix-cluster.e4o7mel.mongodb.net/?retryWrites=true&w=majority`;
// Iy79uaMlha8nZmjh
// const client = new MongoClient(url);
// if (client){
//     console.log("Db Connencted");
// }
// //