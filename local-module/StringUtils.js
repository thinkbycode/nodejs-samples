/**
 * A simple file with one method that checks whether the input is string "true" or not.
 * This acts as a local module that is just exporting a single method - isTrue
 * 
 * The syntax is:
 * module.exports = <name>
 */

const isTrue = (input) => {
    return input === "true";
}

module.exports = isTrue;