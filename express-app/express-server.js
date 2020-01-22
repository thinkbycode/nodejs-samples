//Import express module
const express = require('express');

//Create an express application
const myApp = express();

/**
 * This is a handler for GET requests
 * 1st parameter is the path to capture
 * 2nd parameter is the request handler method with two args - req for Request, res for Response
 * 
 */
myApp.get("/", (req, res) => {
    console.log("GET called.");

    /**
     * We can use the response object to send the response back to the user.
     * Here, we're sending the text data back.
     */
    res.send("Hello Express!!");
});

//Returns a Node http server, listening on port #3000
myApp.listen(3000, () => {
    console.log("Express server is up...");
});