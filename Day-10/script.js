const amount = document.getElementById("amount");

const fromCurrency = document.getElementById("fromCurrency");

const toCurrency = document.getElementById("toCurrency");

const convertBtn = document.getElementById("convertBtn");

const result = document.getElementById("result");

convertBtn.addEventListener("click", convertCurrency);

async function convertCurrency(){

    const from = fromCurrency.value;

    const to = toCurrency.value;

    const money = amount.value;

    const url =
    `https://open.er-api.com/v6/latest/${from}`;

    const response = await fetch(url);

    const data = await response.json();

    const rate = data.rates[to];

    const converted = (money * rate).toFixed(2);

    result.innerHTML =
    `${money} ${from} = ${converted} ${to}`;

}