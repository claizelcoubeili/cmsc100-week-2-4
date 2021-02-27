/*

CMSC 100 Week 3 - NPM
Notes:
    To run this program, run:
        npm install
        node index.js

    * You need to install the used package first since the node_modules folder is ignored by git

*/

// import the lodash.snakecase into the file
const snakeCase = require('lodash.snakecase');

console.log(snakeCase("thisIsInCamelCase"));