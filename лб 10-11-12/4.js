function calculateY(x) {
    try {
        if (x > 3 || x < -3) {
            throw new Error("Недопустимое значение x: корень из отрицательного числа невозможен.");
        }

        let y = 2 - Math.sqrt(9 - x ** 2);
        return y;
    } catch (error) {
        alert(error.message);
        return null;
    }
}

function displayResults() {
    const resultsDiv = document.getElementById("results");
    const xValues = [0, 1, 2, 3, 4, -4];
    xValues.forEach(x => {
        const result = calculateY(x);
        if (result !== null) {
            resultsDiv.innerHTML += `Для x = ${x}, y = ${result.toFixed(2)}<br>`;
        } else {
            resultsDiv.innerHTML += `Для x = ${x} расчет невозможен.<br>`;
        }
    });
}

window.onload = displayResults;
