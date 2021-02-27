/*

CMSC 100 Week 2 - JavaScript Basics

Notes:
    NodeJS download link: https://nodejs.org/en/download/
    Command to install NVM in WSL: curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
*/



/*

    EQUALITY

*/

console.log(0 == false);    // true
console.log(0 === false);   // false, because they have different types (int, bool)
console.log(1 == "1");      // true
console.log(1 === "1");     // false, because they have different types (int, string)
console.log(null == undefined); // true 
console.log(null === undefined); // false

console.log("foo" === "foo"); // true, both operands are of type String 
console.log(new String( "foo" ) === new String( "foo" )); // false, 2 Objects refer diff object instances

/*

    FUNCTION SCOPE

*/

const add = (x, y) => { 
    var result = x + y; 
    return result;
}
console.log(add(2, 5));
console.log(result); // no output


const functionscope = () => { 
    for ( var a = 0; a < 5; a++) { 
        console.log(a)
    }
    console.log( 'Outside of loop: ' + a)
}
functionscope();
console.log(a);

/*

    BLOCK SCOPE

*/

const blockscope = () => { 
    for ( let a = 0; a < 5; a++) {
        console.log(a);
    } 
    console.log( 'Outside of loop: ' + a); //ReferenceError
}
blockscope();

/*

const blockscope = () => {
    for ( let a = 0; a < 5; a++) { 
        console.log(a);
    }
    const a = 'something else';
    console.log( 'Outside of loop: ' + a); // 'something else'
}
blockscope();

*/