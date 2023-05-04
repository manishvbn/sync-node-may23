const http = require('http');
const express = require('express');
const logger = require('morgan');

// Create an Express Application Request Handler
const app = express();

app.set("view engine", "pug");

var employees = [{ id: 1, name: "Manish" },
{ id: 2, name: "Abhijeet" },
{ id: 3, name: "Ram" },
{ id: 4, name: "Abhishek" },
{ id: 5, name: "Ramakant" }];

app.use(logger('dev'));

// app.use((req, res, next) => {
//     console.log("Request - Middleware One");
//     next();
//     console.log("Response - Middleware One");
// });

// app.use((req, res, next) => {
//     console.log("Request - Middleware Two");
//     next();
//     console.log("Response - Middleware Two");
// });

// app.use((req, res, next) => {
//     var stTime = new Date().getTime();
//     next();
//     var enTime = new Date().getTime();
//     var tTime = enTime - stTime;
//     console.log(`${req.url} - Total Time ${tTime} ms`);
// });

// Route Handlers
// app.get("/", (req, res, next) => {
//     try {
//         console.log("Get Request Handler - Index");
//         throw new Error("Just for Check");
//         res.render("index", { pageTitle: "Index View" });
//     } catch (err) {
//         next(err);
//     }
// });

app.get("/", (req, res, next) => {
    console.log("Get Request Handler - Index");
    // throw new Error("Just for Check");
    res.render("index", { pageTitle: "Index View" });
});

app.get("/about", (req, res, next) => {
    console.log("Get Request Handler - About");
    res.render("about", { pageTitle: "About View" });
});

app.get("/contact", (req, res, next) => {
    console.log("Get Request Handler - Contact");
    res.render("contact", { pageTitle: "Contact View" });
});

app.get("/employees", (req, res, next) => {
    console.log("Get Request Handler - Employees");
    res.render("employees", { pageTitle: "Employees View", empList: employees });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.log(`Error Handler...`);
    res.status(500).send("Server Error");
});

// ------------------------------------------------------- Hosting Code
const server = http.createServer(app);

server.listen(3000);

function onError(err) {
    console.log(err);
}

function onListening(err) {
    var address = server.address();
    console.log("Server started on port: ", address.port);
}

server.on('error', onError);
server.on('listening', onListening);