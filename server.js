const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
const homeRoute = require("./server/routes/home");
const updateUserRoute = require("./server/routes/updateUser");
const addUserRoute = require("./server/routes/addUser");
const connectDB = require("./server/database/connection");
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8000;

// log request
app.use(morgan("tiny"));

/**
 * @description Mongodb connection
 */
connectDB();
// parsing the request
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

// setting view engine
app.set("view engine", "ejs");

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.use("/", homeRoute);
app.use("/add-user", addUserRoute);
app.use("/update-user", updateUserRoute);

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});
