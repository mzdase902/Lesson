// function sum (a) {
//     return function sumB (b) {
//         return b + a;
//     }
// }

// console.log (sum (1)(2));

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween (a, b){
    return function inBetw (c) {
        return a <= c && b >= c;
    }
}

function inArray (a) {
    return function (b) {
        a.includes(b);
    }
}




console.log( arr.filter(inBetween(2, 5)) );

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2