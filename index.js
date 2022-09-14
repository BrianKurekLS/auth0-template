const fs = require('fs');
var axios = require("axios").default;

const html = fs.readFileSync('./template.html');
const token = fs.readFileSync('./token.txt').toString();

var options = {
    method: 'PUT',
    url: 'https://loanstreet-dev.auth0.com/api/v2/branding/templates/universal-login',
    headers: {authorization: `Bearer ${token}`, 'content-type': 'text/html'},
    data: html.toString(),
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});