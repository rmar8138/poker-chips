const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const router = require("./routes");

const app = express();
const port = process.env.PORT || 4321;

// Database

mongoose.connect("mongodb://localhost/poker-chips", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Set promise library

mongoose.Promise = global.Promise;
mongoose.connection.on("error", err => console.log(err));

// Handlebars

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Allow PUT and DELETE methods

app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

// Bodyparser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes

app.use(router);

// Start server

app.listen(port, () => console.log(`Server is listening on port ${port}`));
