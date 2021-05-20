
function printNumbers(from, to){
    let interval = setInterval(() => {
        console.log(from++)
    }, 500);
    if (from == to) {
        clearInterval(interval)}
};
printNumbers(4, 9);
console.log(1);
