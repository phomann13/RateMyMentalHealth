const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

//gives json object to the webpage 
app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!",
             title: "Boobs"});
});

app.put("/boobs", (req, res) => {
    res.json()
});

//starts the server
app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});