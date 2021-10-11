const express = require("express");
const bodyParser = require("body-parser");

// Use express
const app = express();

// Using the bodyParser
app.use(bodyParser.urlencoded({extended: true}));

// Telling express to use CSS
app.use(express.static("public"));

// Telling express to use EJS
app.set('view engine', 'ejs');

// Importing the date from date.js
const dateModule = require(__dirname + "/date.js");
// const dateTime = ;
// console.log(date.date());

// Defining the variables
const allComments = [ ["Aman", "Sharma", "aman09@gmail.com", "October 4, 2021, 08:35 PM" , "Thanks for posting the helpful content"] ];


// Set up the Server
app.get("/", function(req, res) {
    // res.sendFile(__dirname + "/index.html");

    // Using EJS
    res.render('comments', {allCommentsHTML: allComments});
});

app.post("/", function(req, res) {

    const newComment = [];
    // Grabing the values entered

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const textarea = req.body.textarea;

    console.log(firstName + "\n" + lastName + "\n" + email + "\n" + phone + "\n" + textarea );

    // Using the date
    const dayTime = dateModule.date();
    // console.log(dayTime);

    // Adding all the details to the newComment
    newComment.push(firstName, lastName, email, dayTime, textarea);

    // Adding the newComment to allComment
    allComments.push(newComment);

    res.redirect("/");
});




app.listen(3000, function(req, res) {
    console.log("Server is running on the port 3000");
});


































