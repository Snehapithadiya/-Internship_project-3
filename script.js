document.getElementById('convertButton').addEventListener('click', function() {
    const temp = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitSelect').value;
    const resultDisplay = document.getElementById('resultDisplay');
    let celsius, fahrenheit, kelvin, backgroundColor;

    if (isNaN(temp)) {
        alert("Please enter a valid number!");
        resultDisplay.classList.remove('show');
        return;
    }

    // Convert the input temperature to Celsius, Fahrenheit, and Kelvin
    if (unit === "celsius") {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
    } else if (unit === "fahrenheit") {
        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = celsius + 273.15;
    } else if (unit === "kelvin") {
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = temp;
    }

    // Determine the background color based on the Celsius value
    if (celsius <= -10) {
        backgroundColor = '#0000ff'; // Very Cold: Blue
    } else if (celsius <= 0) {
        backgroundColor = '#00aaff'; // Cold: Light Blue
    } else if (celsius <= 15) {
        backgroundColor = '#00ff00'; // Cool: Green
    } else if (celsius <= 25) {
        backgroundColor = '#ffff00'; // Mild: Yellow
    } else if (celsius <= 35) {
        backgroundColor = '#ffa500'; // Warm: Orange
    } else {
        backgroundColor = '#ff4500'; // Hot: Red-Orange
    }

    // Update the result display with all three temperatures
    resultDisplay.innerHTML = `
        🌡️ Celsius: ${celsius.toFixed(2)} °C<br>
        🌡️ Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
        🌡️ Kelvin: ${kelvin.toFixed(2)} K
    `;

    // Apply the background color and show the result
    resultDisplay.style.backgroundColor = backgroundColor;
    resultDisplay.classList.add('show');
});
