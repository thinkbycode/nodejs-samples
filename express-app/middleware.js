const express = require('express');

const app = express();

const middleware1 = (req, res, next) => {
    console.log("In middleware1..");
    /**
     * Doesn't know who's next, the control will automatically be given to the next middleware in chain
     * If you don't call next in the end, the request will not propagate further.
     */
    next();
}

//Using middleware by defining a separate function
app.use(middleware1);

//Adding another middleware by using inline function syntax
app.use((req, res, next) => {
    console.log("In middleware 2");
});

app.get("/", (req, res) => {
    console.log("Inside GET");
});

app.listen(3000, () => {
    console.log("Server is up...");
});