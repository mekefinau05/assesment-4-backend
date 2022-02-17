const express = require("express");
const cors = require("cors");
const ctrl = require('./controller')

const app = express();

const port = `http://localhost:4000/api/compliment/`

app.use(cors());

app.use(express.json()); 

app.get("/api/compliment", ctrl.getCompliment);
app.get("/api/fortune", ctrl.getFortune)

app.post("/api/createCompliment", ctrl.newCompliment)
app.delete("/api/deleteCompliment", ctrl.deleteCompliment)
app.delete("/api/deleteFortune", ctrl.deleteFortune)

app.listen(4000, () => console.log("Server running on 4000"));
