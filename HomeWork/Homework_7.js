// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов.

let arr = [1, 2, 3];
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(arr);
console.log (arr);


// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr1 = [ vasya, petya, masha ];

function getAverageAge(users) {
    let ageSum = users.reduce((sum, current) => sum + current.age, 0);
    return ageSum/arr1.length;
}

console.log (getAverageAge(arr1));

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya1, petya1, masha1 ];

let usersMapped = users.map((item) => ({
    fullName: item.name + " " + item.surname,
    id: item.id
    }));

console.log (usersMapped[0].id);
console.log (usersMapped[0].fullName);
console.log (usersMapped[1].id);
console.log (usersMapped[1].fullName);
console.log (usersMapped[2].id);
console.log (usersMapped[2].fullName);        
