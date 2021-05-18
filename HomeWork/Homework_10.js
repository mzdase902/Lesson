// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };
// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без?

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printList(list) {
    
    console.log (list.value);
    
    if (list.next){
        printList(list.next);
    }
}

printList(list);

console.log("______________________")

function printListLoop(list) {
    let clone = list;
    while (clone){
        console.log(clone.value);
        clone = clone.next;
    }
}
printListLoop(list)

console.log("______________________")
console.log("______________________")

// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

function printRevList(list) {    
    if (list.next){
        printRevList(list.next);
    }
    console.log (list.value);
}
printRevList (list);

console.log("______________________")