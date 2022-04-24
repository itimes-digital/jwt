const jwt = require("jsonwebtoken");

let payload = {
    iss: "suacarreira.digital",
    iat: new Date().getSeconds(),
    exp: new Date().setMinutes(60),
    name: "Anderson de Sousa",
    email: "teste@teste.com"
};

var token = jwt.sign(payload, "Elvis Presley");

console.log(token);