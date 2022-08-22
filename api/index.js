const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,

    useUnifiedTopology: true,
//   },err => {

  }).then(console.log("connecte to mongodb")).catch((err)=> console.log(err));


app.use("/api/auth", authRoute)

app.listen("5000", ()=>{
    console.log("backend is running.");
});