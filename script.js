document.getElementById('convertButton').addEventListener('click', function() {
    const temp = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitSelect').value;
    const resultDisplay = document.getElementById('resultDisplay');
    let result;

    if (isNaN(temp)) {
        alert("Please enter a valid number!");
        resultDisplay.classList.remove('show');
        return;
    }

    if (unit === "celsius") {
        const fahrenheit = (temp * 9/5) + 32;
        const kelvin = temp + 273.15;
        result = `Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>Kelvin: ${kelvin.toFixed(2)} K`;
    } else if (unit === "fahrenheit") {
        const celsius = (temp - 32) * 5/9;
        const kelvin = celsius + 273.15;
        result = `Celsius: ${celsius.toFixed(2)} °C<br>Kelvin: ${kelvin.toFixed(2)} K`;
    } else if (unit === "kelvin") {
        const celsius = temp - 273.15;
        const fahrenheit = (celsius * 9/5) + 32;
        result = `Celsius: ${celsius.toFixed(2)} °C<br>Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    }

    resultDisplay.innerHTML = result;
    resultDisplay.classList.add('show');
});
