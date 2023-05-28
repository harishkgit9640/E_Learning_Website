var mongoClient = require("mongodb").MongoClient;
var express = require("express");
var cors = require("cors");

var connectionString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.get("/", (request, response) => {
    response.send("welcome to your website");
})
app.get("/users", (request, response) => {
    mongoClient.connect(connectionString).then((clientObject) => {
        var database = clientObject.db("shopkaro");
        database.collection("users").find({}).toArray().then((documents) => {
            response.send(documents);
        })
    })
});

app.post("/signup", (request, response) => {
    var user = {
        "firstName": request.body.firstName,
        "lastName": request.body.lastName,
        "email": request.body.email,
        "password": request.body.password,
    }
    mongoClient.connect(connectionString).then(clientObject => {
        var database = clientObject.db("shopkaro");
        database.collection("users").insertOne(user).then(result => {
            console.log("Record Inserted");
            response.redirect("/users");
        })
    })
});

// contact information api
app.post("/contact", (request, response) => {
    var data = {
        "fullName": request.body.fullName,
        "email": request.body.email,
        "number": request.body.number,
        "message": request.body.message,
    }
    mongoClient.connect(connectionString).then(clientObject => {
        var database = clientObject.db("shopkaro");
        database.collection("contact").insertOne(data).then(result => {
            console.log("data Inserted successfully");
            response.redirect("/contact");
        })
    })
});

app.listen(5000);
console.log("Server Started : http://127.0.0.1:5000");
