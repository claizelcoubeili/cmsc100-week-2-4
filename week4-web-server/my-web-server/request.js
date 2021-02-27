const request = require("request");

const data = {
    message: "Hello World!"
}

request('http://localhost:3000/', (err, response, body) => {
    console.log(body);
});

request('http://localhost:3000/submit-data', { method: "POST", form: data }, (err, response, body) => {
    console.log(body);
})

