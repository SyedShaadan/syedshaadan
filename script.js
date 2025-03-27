async function convertCurrency() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amt = parseFloat(amount.value);

    if (isNaN(amt) || amt <= 0) {
        result.textContent = 'Please enter a valid amount';
        return;
    }

    result.textContent = 'Converting...';

    // ExchangeRate-API endpoint
    const apiKey = "d8c8bdb3421093db81bb020e";
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`;
    
    const response = await fetch(url);
    const data = await response.json();

    // Get the exchange rate for the target currency
    const exchangeRate = data.conversion_rates[to];
    const convertedAmount = amt * exchangeRate;

    result.textContent = `Converted Amount: ${amt.toFixed(2)} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
}
