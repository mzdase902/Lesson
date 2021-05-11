// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
// Пример работы вашей функции:

// function sumTo(n) { /*... ваш код ... */ }

// alert( sumTo(100) ); // 5050
// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?

// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?

function sumTo (n) {
    if (n === 1){
        return n;
    } 
    if (n < 0) {
        return null;
    } else {
        return n + sumTo(n-1);
    }
}
console.log (sumTo(5));

//_____________________________________

function sumToo (n) {
    let result = 0;
    for (let i = 1; i <= n; i++){
        result += i;
    }
    return result;
}

console.log (sumToo(5));

//______________________________________

function fucktorial (n) {
    if (n === 1){
        return n;
    } 
    if (n < 0) {
        return null;
    } else {
        return n * fucktorial(n-1);
    }
}
console.log (fucktorial(6));

//_____________________________________

function fib (n) {
    if (n === 1 || n === 2){
        return 1;
    } 
    if (n < 0) {
        return null;
    } else {
        return fib(n-2) + fib(n-1);
    }
}
console.log (fib(6));
