const {MongoClient} = require('mongodb');
const express = require("express");
const cors = require("cors");
const { faBullseye } = require('@fortawesome/free-solid-svg-icons');
const app = express();

//saves database URI
const uri = "mongodb+srv://t-hyland:Tomh@cluster0.wzdgtmt.mongodb.net/?retryWrites=true&w=majority";
//creates client that is linked to the database
const client = new MongoClient(uri);

app.use(cors());
app.use(express.json());

let currUser = {};

//gives json object to the webpage 
app.get("/message", (request, response) => {
  response.json({ message: "Hello from server!",
             title: "Boobs"});
});

//gets login data and saves to currUser
app.post("/loginData", (request, response) => {
  //thisEmail = request.body.email;
  //thisPassword = request.body.password; 
  currUser.email = request.body.email;
  currUser.password = request.body.password; 

  response.send("User recieved");
});

//verifies login from currUser and sends T/F to app
app.get("/verification", (request, response) => {
  let x = verifyUser(currUser).then((data) => 
    response.json({
      message: data
  }));
  console.log(x);
})

//starts the server
app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

async function verifyUser(user){
  try{
    await client.connect();

    const result = await client.db("RateMyMentalHealth").collection("people").findOne({email: user.email});
    if (result != null && result.password == user.password){
      await client.close();
      console.log(true);
      return true;
    } 
  }
  catch (e){
    console.error(e);
  } finally {
    await client.close();
  }
  return false;
}