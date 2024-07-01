window.onload = function () {
    // Задаем строковые переменные
    let s1 = "Я люблю Беларусь";
    let s2 = "Я учусь в Политехническом колледже";

    // 1. Определяем длину строки s1
    let lengthS1 = s1.length;

    // Определяем номер варианта (n). Для примера возьмем n = 5.
    let n = 5;
    let nthChar = s1[n - 1]; // Индексация начинается с 0, поэтому берем n-1
    let nthCharCode = nthChar.charCodeAt(0);

    // 3. Заменяем в строке s2 все буквы "о" на "а"
    let replacedS2 = s2.replace(/о/g, "а");

    // Отображаем результаты
    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <p>Длина строки s1: ${lengthS1}</p>
        <p>${n}-ый символ в строке s1: ${nthChar}</p>
        <p>ASCII-код ${n}-ого символа в строке s1: ${nthCharCode}</p>
        <p>Строка s2 после замены всех "о" на "а": ${replacedS2}</p>
    `;
};
