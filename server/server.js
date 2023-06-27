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
    const [firstName, lastName, email, password] = request.body;
    var user = {
        firstName,
        lastName,
        email,
        password
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
    const [fullName, email, number, message] = request.body;
    var data = {
        fullName,
        email,
        number,
        message,
    }
    mongoClient.connect(connectionString).then(clientObject => {
        var database = clientObject.db("shopkaro");
        database.collection("contact").insertOne(data).then(result => {
            console.log("data Inserted successfully");
            response.redirect("/");
        })
    })
});

app.listen(5000);
console.log("Server Started : http://127.0.0.1:5000");
