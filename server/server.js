const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let email = "", password = "";

//gives json object to the webpage 
app.get("/message", (request, response) => {
  response.json({ message: "Hello from server!",
             title: "Boobs"});
});

app.post("/loginData", (request, response) => {
  let user = {
    email: request.body.email,
    password: request.body.password,
  }
  insert(user);

  response.send("message recieved");
});

app.get("/verification", (request, response) => {
  if (email == "a") {
    response.json({ message: true });
  } else {
    response.json({ message: false });
  }
})

//starts the server
app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});



//database stuff
const {MongoClient} = require('mongodb');

async function insert(user){
    //saves database URI
    const uri = "mongodb+srv://t-hyland:Tomh@cluster0.0uz4cny.mongodb.net/?retryWrites=true&w=majority";

    //creates client that is linked to the database
    const client = new MongoClient(uri);

    try {
        //connects client to the database
        await client.connect();

        await client.db("RateMyProffessor").collection("posts").insertOne(user);
    } catch (e){
        console.error(e);
    } finally {
        await client.close();
    }
};