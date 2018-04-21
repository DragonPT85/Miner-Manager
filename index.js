const axios = require('axios')
const api = require('./apiCalls.js')

let b = document.getElementById('getptice');
let tdiff = document.getElementById('tDifficulty');

api.hello();

console.log(b);

b.addEventListener("click", function (event) {
    console.log('hey');
    getPrice();
})

function getPrice() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/')
        .then(function (response) {
            let data = response.data[0]['price_usd'];

            console.log(response.data[0]['price_usd']);
            tdiff.innerHTML = data;
            //console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        });
}