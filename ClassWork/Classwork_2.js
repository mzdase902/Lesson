// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
  // );

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';

// delete user.name;

//

const isEmpty = (obj) => {
  for (const key in obj) {
    return false;
  }
  return true;
}