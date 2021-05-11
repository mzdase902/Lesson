// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.


function formatDate(date){
    let now = new Date()
    let dif = now - date.getTime();

    if (dif < 1000){
        return "прямо сейчас";
    }

    let sec = (dif/1000)
    if (sec < 60) {
        return sec + " сек. назад";
    }

    let min = (dif/(60*1000))
    if (min < 60) {
        return min + " мин. назад";
    }

    let [dd, mm, yy, hh, mimi] = [date.getDate(), date.getMonth()+1, date.getFullYear(), date.getHours(), date.getMinutes()];
    return dd + "." + mm + "." + yy + " " + hh + ":" + mimi;

}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
console.log( formatDate(new Date(new Date - 86400 * 1000)) );

//________________________________________________

console.log("//________________________________________________")

// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

// let user = {
//   name: "Василий Иванович",
//   age: 35
// };

let user = {
  name: "Василий Иванович",
  age: 35
};

user = JSON.stringify(user);

let newUser = JSON.parse(user);

console.log (user);
console.log (newUser);

//________________________________________________

console.log("//________________________________________________")

