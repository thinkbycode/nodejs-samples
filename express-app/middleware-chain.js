const express = require('express');

const app = express();
/**
 * Order of middlewares in the code matters because an incoming
 * request is processed in top to bottom fashion.
 * So, in this example, the request will be checked against Middleware1 first, and then for Middleware2.
 * 
 * It's important to place the most specific middleware before the general one to make sure the order
 * in which you want middlewares to process the request.
 *  
 * It is similar to how you write catch blocks in Java exception handling.
 */

 /**
  * Another important thing in this example is the first parameter i.e. path
  * 
  */
 
//Middleware1
app.use("/hello/user", (req, res, next) => {
    console.log("In Hello User section");
    next();
});

//Middleware2
app.use("/hello", (req, res, next) => {
    console.log("In Hello section");
    next();
});

app.get("/", (req, res) => {
    console.log("Inside GET");
});

app.listen(3000, () => {
    console.log("Server is up...");
});