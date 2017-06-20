
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var bluebird = require("bluebird");
var mongoose = require("mongoose");
var routes = require("./routes/routes");



var History = require("./models/History");

mongoose.Promise = bluebird;
var app = express();


var PORT = process.env.PORT || 8030;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));
app.use("/", routes);


// -------------------------------------------------

var db = process.env.MONGODB_URI || "mongodb://heroku_xzlhrgvc:ntpq7v6fu5sl6db8ufoj3a4csm@ds161041.mlab.com:61041/heroku_xzlhrgvc";


// Connect mongoose to our database
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});



// -------------------------------------------------


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


app.get("/api", function(req, res) {

  //  find all the records, sort it in descending order, then limit the records to 5
  History.find({}).sort([
    ["date", "descending"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});


app.post("/api", function(req, res) {
  console.log("BODY: " + req.body.terms);


  History.create({
    location: req.body.location,
    date: Date.now()
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  });
});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
