
const printInfo = (message) => {
    console.log(message);
}

const printErr = (message) => {
    console.log("[ERROR] "+message);
}

module.exports = {printInfo, printErr};

/*
Another way to export by explicit keys - infoKey and infoErr
Client code needs to use by key.
*/

/*
module.exports = {
    infoKey: printInfo,
    infoErr: printErr
}

exports.infoKey = printInfo;
exports.infoErr = printErr;
*/