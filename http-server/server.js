/**
 * We will use http core module to setup a simple http node server.
 */

//Step - 1, Import core module
const http = require('http'); 

//Step - 2, createServer return an instance of http server
const httpServer = http.createServer((request, response) => {
    response.statusCode = 200;
    response.end("Hola!");
});

//Step - 3, Start the server on port 3000
httpServer.listen(3000, () => {
    console.log("Server is up!");
});
