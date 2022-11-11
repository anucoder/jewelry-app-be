
const express = require("express");
const APIRouters = require("./Routes/APIRouter");
const cors =  require("cors");

const app = express();
const PORT = process.env.PORT || 5002;

const mongoose = require("mongoose");
// const URI = "mongodb://127.0.0.1:27017/Fantasy_app";
const URI="mongodb+srv://fantasyuser:user123@edureka.7a1qq6y.mongodb.net/fantasy?retryWrites=true&w=majority"


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/", APIRouters); // home entry

//Connection to db
mongoose.connect(URI).then(()=>{
  app.listen(PORT, () => {
    console.log("db connected successfully !!!")
    console.log("zomato api is running on port ", PORT);
  });
}).catch((error)=>{
  console.log(error);
});