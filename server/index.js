const express = require("express");
const cors = require("cors");
const ctrl = require('./controller')

const app = express();

const port = `http://localhost:4000/api/compliment/`

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", ctrl.getCompliment);
app.post("/api/compliment", ctrl.createCompliment)

app.listen(4000, () => console.log("Server running on 4000"));
