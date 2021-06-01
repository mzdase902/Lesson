let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log( rabbit.jumps ); // true

delete rabbit.jumps;

console.log( rabbit.jumps ); // null

delete animal.jumps;

console.log( rabbit.jumps ); // undefined

//_________________________________

let head = {
    glasses: 1
};

let table = {
    __proto__: head,
    pen: 3
};

let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2
};

let pockets = {
    __proto__: bed,
    money: 2000
};

console.log(pockets.pen);
console.log(bed.glasses);

//__________________________________

let animalTwo = {
    eat() {
        this.full = true;
    }
};

let rabbitTwo = {
    __proto__: animalTwo
};

rabbitTwo.eat(); // rabbit

//__________________________________

let hamster = {
    stomach: [],
    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster,
    stomach: []
};

let lazy = {
    __proto__: hamster,
    stomach: [] 
};

speedy.eat("apple");
console.log( speedy.stomach ); // apple

console.log( lazy.stomach ); // []