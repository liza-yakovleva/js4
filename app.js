"use strict";

// TODO: Завдання 1. Функція приймає три параметри, перших два це числа, третій параметр булевий(true / false).Якщо третій параметр true, то повернути більше з чисел, якщо false то менше.Приклад foo(5, 4, false) => 4
// *True - Max  False - Min
// ?solution option 1
function TrueMaxFalseMin(x, y, z) {
  if (x === y) {
    return `Минимального и максимального значения нет, так как x = y = ${x}`
  };
  if (z) {
    return Math.max(x, y);
  } else {
    return Math.min(x, y);
  }
}
console.log(TrueMaxFalseMin(5, 4, false));
console.log(TrueMaxFalseMin(1, 0, true));
console.log(TrueMaxFalseMin(10, 0, true));
console.log(TrueMaxFalseMin(10, 10, true));


// ? solution option 2
// function showNumber(firstNumber, secondNumber, b) {
//    if (firstNumber === secondNumber) {
//      return console.log (`Минимального и максимального значения нет, так как firstNumber = secondNumber = ${firstNumber}`);
//    }
//   if (b === true) {
//     if (firstNumber > secondNumber) {
//       return console.log(firstNumber);
//     } else {
//       return console.log(secondNumber);
//     }
//   } else if (b === false) {
//     if (firstNumber < secondNumber) {
//       return console.log(firstNumber);
//     } else {
//       return console.log(secondNumber);
//     }
//   }
// }
// showNumber (5, 4, false);
// showNumber (7, 0, true);
// showNumber (100, 300, false);
// showNumber (10, 10, true);

// ? Solution option 3
// let min;
// let max;
// function TrueMaxFalseMin(x = 2, y = 5, z = true) {
//  if (x === y) {
//   return `Минимального и максимального значения нет, так как x = y = ${x}`
// };
//   if (x > y) {
//     min = y;
//     max = x;
//   } else {
//     min = x;
//     max = y;
//   }
//   if (z) {
//     return max;
//   } else {
//     return min;
//   }
// }
// console.log(TrueMaxFalseMin(5, 4, false));
// console.log(TrueMaxFalseMin(1, 0, true));
// console.log(TrueMaxFalseMin(10, 0, true));
// console.log(TrueMaxFalseMin());
// console.log(TrueMaxFalseMin(10, 10, true));


// ? Solution option 4

// function maxValue(x , y) {
//   return x > y ? x : y;
// }

// function minValue(x , y) {
//   return x < y? x: y;
// }
// function TrueMaxFalseMin(x=2, y=3, z = true) {
//   if (x === y) {
//     return `Минимального и максимального значения нет, так как x = y = ${x}`
//   };
//   return z ? maxValue(x,y) : minValue(x,y);
//  }
// console.log(TrueMaxFalseMin(5, 4, false));
// console.log(TrueMaxFalseMin(1, 0, true));
// console.log(TrueMaxFalseMin(10, 0, true));
// console.log(TrueMaxFalseMin());
// console.log(TrueMaxFalseMin(10,10,true));


// TODO: Завдання 2. Написати функцію 1 calcAge() яка вираховує вік користувача(кількість років), у користувача потрібно запитати рік народження.Функція 2 yearsUntilRetirement(year, userName) в залежності від віку виводить інформацію коли користувач вийде на пенсію, але якщо вік користувача вже такий, то вивести повідомлення що користувач вже пенсіонер.Вихід на пенсію - 60 років.В консолі треба вивести повідомлення(Іван вийде на пенсію через 20 років, або Іван вже пенсіонер).
// *how old (from date of birth)
// ? Solution option 1
function calcAge() {
  let yearOfBirth = +prompt("Ведіть год народження :", "");
  let age = 2020 - yearOfBirth;
  return console.log(`Ваш вік ${age} років`);
}
calcAge();

// ? Solution option 2

// function calcAge() {
//   let yearOfBirth = +prompt("Ведіть год народження :", "");
//   let currentYear = +prompt("Ведіть текущий год(4 цифры) :", "2020");
//   let age = currentYear - yearOfBirth;
//   return console.log(`Ваш вік ${age} років`);
// }
// calcAge();

// ? Solution option 3
// let yearOfBirth = +prompt("Ведіть год народження :", "");
// const currentYear = new Date().getFullYear();
// function calcAge(yearB) {
//   let age = currentYear - yearB;
//   return console.log(`Ваш вік ${age} років`);
// }
// calcAge(yearOfBirth);



// ? Solution option 4

// let yearOfBirth = +prompt("Ведіть год народження :", "");
// const currentYear  = currentTime.getFullYear();
// function calcAge(yearB) {
//   let age = currentYear - yearB;
//   return console.log(`Ваш вік ${age} років`);
// }
// calcAge(yearOfBirth)


// *when to retire
// ? Solution option 1
function yearsUntilRetirement(year, userName) {
  if (year < 60) {
    let beforeRetirement = +(60 - year);
    return (`${userName} вийде на пенсію через ${beforeRetirement} років`);
  } else {
    return (`${userName} вже пенсіонер.`);
  }
}
console.log(yearsUntilRetirement(40, "Іван"));
console.log(yearsUntilRetirement(65, "Ольга"));

// ? Solution option 2

// function yearsUntilRetirement(year, userName) {
//   if (year < 60) {
//     return `${userName} вийде на пенсію через ${60 - year} років`;
//   } else {
//     return `${userName} вже пенсіонер.`;
// }
// console.log(yearsUntilRetirement(40, "Іван"));
// console.log(yearsUntilRetirement(65, "Ольга"));



// ? Solution option 3
// function yearsUntilRetirement(year, userName) {
//   let resualt =
//     year < 60
//       ? console.log(`${userName} вийде на пенсію через ${60 - year} років`)
//       : console.log(`${userName} вже пенсіонер.`);
//   return resualt;
// }
// yearsUntilRetirement(40, "Іван");
// yearsUntilRetirement(65, "Ольга");

// ? Solution option 4
// function yearsUntilRetirement(year, userName) {

//    return  year < 60
//       ? console.log(`${userName} вийде на пенсію через ${60 - year} років`)
//       : console.log(`${userName} вже пенсіонер.`);
// }
// yearsUntilRetirement(40, "Іван");
// yearsUntilRetirement(65, "Ольга");

// TODO: Завдання 3. Написати функцію weekFn(n), яка приймає параметром день тижня, а повертає його назву.Якщо вводиться рядок, дробове число, чи число поза межами діапазону 1 - 7 - функція повинна повернути null.Задачу треба виконувати через оператор switch.
// *What day of the week
// ? Solution option 1
function weekFn(n) {
  switch (n) {
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
    case 7:
      console.log('Sunday');
      break;
    default:
      console.log(null);

  }
}
weekFn(1);
weekFn(1.5);
weekFn(7);
weekFn(15);


// ? Solution option 2
// function weekFn(n) {
//   switch (n) {
//     case 1:
//       return ('Monday');
//     case 2:
//       return ('Tuesday');
//     case 3:
//       return ('Wednesday');
//     case 4:
//       return ('Thursday');
//     case 5:
//       return ('Friday');
//     case 6:
//       return ('Saturday');
//     case 7:
//       return ('Sunday');
//     default:
//       return (null);
//   }
// }
// console.log(weekFn(1));
// console.log(weekFn(1.5));
// console.log(weekFn(7));
// console.log(weekFn(15));