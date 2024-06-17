const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 4000;
app.use(express.json());

const DATABASE_URL = process.env.DATABASE_URL;
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
    console.log("connected to database");
});
mongoose.connection.on("error", (err) => {
    console.log("error in connection", err);
});

app.use(bodyparser.json());
app.use(cors());



app.get("/", (req, res) => {
    res.send("welcome to my api");
});

// require
const userRoute = require("./routes/userRoute");

// path use

app.use("/api/users", userRoute);


app.listen(port, () => {
    console.log("server is running on port", port);
});

