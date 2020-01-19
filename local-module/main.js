/**
 * Since this is a local module, we need to refer it from local.
 * Notice the './' in the require method.
 */
const isTrueModule = require('./StringUtils'); //You could give any name to the variable, it's just a handler
const logM = require('./logMsg');

console.log("------- StringUtils ---------");
console.log(isTrueModule("true"));
console.log(isTrueModule("anything else"));

console.log("\n------- Logging ---------");
console.log(logM) //{ printInfo: [Function: printInfo], printErr: [Function: printErr] }

logM.printInfo("I'm using a local module!");
logM.printErr("Something bad happened!");