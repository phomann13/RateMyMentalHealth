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

//LOGIN PAGE 
let currUser = {};
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
  verifyUser(currUser).then((data) => 
    response.json({
      message: data
  }));
})

//SIGNUP PAGE
//gets signup data and saves to database 
app.post("/signUpData", (request, response) => {
  let newUser = {};

  if (request.body.type == "person") {
    newUser.type = "person";
    newUser.firstName = request.body.firstName; 
    newUser.lastName = request.body.lastName;
  } else if (request.body.type == "univ") {
    newUser.type = "univ";
    newUser.univName = request.body.univName;
  }
  newUser.email = request.body.email;
  newUser.password = request.body.password;

  console.log(newUser);

  saveUser(newUser).then((data) => 
    response.json({
      message: data
    })
  );
});

//starts the server
app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

//returns 0 if user is saved to database, 1 if already in database, -1 if failed
async function saveUser(user){
  try{
    await client.connect();
    
    const result = await client.db("RateMyMentalHealth").collection("users").findOne({email: user.email});
    if (result == null) {
      await client.db("RateMyMentalHealth").collection("users").insertOne(user);
    } else {
      return 1;
    }

  }
  catch (e){
    console.error(e);
    return -1;
  } finally {
    await client.close();
  }
  return 0;
}

//returns true if email and password match in database, false if not
async function verifyUser(user){
  try{
    await client.connect();

    const result = await client.db("RateMyMentalHealth").collection("users").findOne({email: user.email});
    if (result != null && result.password == user.password){
      await client.close();
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