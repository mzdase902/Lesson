// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)

// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

// Пример работы функции:

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

const random = function(min, max) {
    return min + Math.random() * (max - min);
    }

console.log(random(1,5));


// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

// Пример работы функции:

// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5
// Можно использовать решение из предыдущей задачи.

function randomInteger(min, max) {
    let randomNumber = min + Math.random() * (max - min);
    let randomInt = Math.round(randomNumber);
    return randomInt;
    }

console.log(randomInteger(1,5));

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

function checkSpam(str){
    let lowerCaseString = str.toLowerCase();
    
    if (lowerCaseString.includes("viagra") || lowerCaseString.includes ("xxx")){
        return true;
    } else {
        return false;
    }
}

console.log(checkSpam("ViAgRa"));


// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"

function truncate(str, maxlength){
    if (maxlength < str.length){
        return str.slice(0, maxlength) + "...";
    } else {
        return str;
    }
}

console.log(truncate("Я очень хочу спать! Заработай, пожалуйста !", 15));


// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

// alert( extractCurrencyValue('$120') === 120 ); // true

function extractCurrencyValue(str){
    if (str[0] == "$"){
        return str.slice (1, str.length);
    } else {
        return "А где Доллар, Джонни ?"
    }
}
console.log(extractCurrencyValue("$99.99"));