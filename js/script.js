//1.Запросить у пользователя его возраст и определить, кем он является: ребенком (0–12), подростком (12–18), взрослым (18-60) или пенсионером (60– ...).
// const age = +prompt("How old are you?");
// if (age >= 0 && age < 12) {
//   console.log("You are a child.");
// } else if (age >= 12 && age < 18) {
//   console.log("You are a teenager.");
// } else if (age >= 18 && age < 60) {
//   console.log("You are an adult.");
// } else if (age >= 60 && age < 113) {
//   console.log("You are a pensioner.");
// } else {
//   console.error("Please enter a real age.");
// }

// 2.Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
// const number = +prompt("Enter a number from 0 to 9");
// if (number === 0) {
//   console.log(")");
// } else if (number === 9) {
//   console.log("(");
// } else if (number === 8) {
//   console.log("*");
// } else if (number === 7) {
//   console.log("&");
// } else if (number === 6) {
//   console.log("^");
// } else if (number === 5) {
//   console.log("%");
// } else if (number === 4) {
//   console.log("$");
// } else if (number === 3) {
//   console.log("#");
// } else if (number === 2) {
//   console.log("@");
// } else if (number === 1) {
//   console.log("!");
// } else {
//   console.error("You should enter a number from 0 to 9");
// }

// 3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
// const number = prompt("Enter a three-digit number");
// let one = number[0];
// let two = number[1];
// let three = number[2];

// if (number.length != 3) {
//   console.error("Please enter a three-digit number");
// } else if (one === two || one === three || two === three) {
//   console.log("There are equal digits in the entered number");
// } else {
//   console.error("There are NO equal digits in the entered number");
// }

// 4. Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
// const year = +prompt("Enter a year");
// if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
//   console.log("The entered year is leap");
// } else {
//   console.log("The entered year is NOT leap");
// }

// 5.Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
// const number = prompt("Enter a five-digit number");
// let one = number[0];
// let two = number[1];
// let four = number[3];
// let five = number[4];

// if (number.length != 5) {
//   console.error("Please enter a five-digit number");
// } else if (one === five && two === four) {
//   console.log("The number is a palindrome.");
// } else {
//   console.log("The number is NOT a palindrome.");
// }

// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAH или AZN, и получает в ответ соответствующую сумму.
// let sum = prompt("Enter sum in USD");
// let currency = prompt(
//   "Enter currency. Please choose from the following variants: EUR, UAH or AZN."
// );
// currency = currency.toUpperCase();

// if (currency === "EUR") {
//   console.log(`Your sum in EUR is ${sum * 0.92}`);
// } else if (currency === "UAH") {
//   console.log(`Your sum in UAH is ${sum * 27.06}`);
// } else if (currency === "AZN") {
//   console.log(`Your sum in AZN is ${sum * 1.7}`);
// } else {
//   console.error(
//     "Please choose the currency from the following variants: EUR, UAN or AZN."
//   );
// }

// 7.Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
// let sum = prompt("Enter sum");

// if (sum >= 200 && sum < 300) {
//   console.log(`Sum to be payed is ${sum - sum * 0.03}.`);
// } else if (sum >= 300 && sum < 500) {
//   console.log(`Sum to be payed is ${sum - sum * 0.05}.`);
// } else if (sum >= 500) {
//   console.log(`Sum to be payed is ${sum - sum * 0.07}.`);
// } else {
//   console.log(`Sum to be payed is ${sum}.`);
// }

// 8.Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
// let perimeterCircle = prompt("Enter perimeter of the circle");
// let perimeterSquare = prompt("Enter perimeter of the square");

// if (perimeterCircle / 3.14 <= perimeterSquare / 4) {
//   console.log("The circle fits into the square");
// } else {
//   console.log("The circle DOESN'T fit into the square");
// }

// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
// let answer1 = +prompt(
//   "What is the biggest mammal on the Earth: 1.blue whale, 2.elephant or 3.dolphin? Reply with 1, 2 or 3."
// );
// let answer2 = +prompt(
//   "what is the temperature of a boiling water at sea level in °C: 1. 0°C, 2. 10°C or 3. 100°C? Reply with 1, 2 or 3."
// );
// let answer3 = +prompt(
//   "When did World War 2 start: 1. in 1935, 2. in 1939 or 3. in 1941? Reply with 1, 2 or 3."
// );

// let currentScore = 0;

// if (answer1 === 1) {
//   currentScore += 2;
// }

// if (answer2 === 3) {
//   currentScore += 2;
// }

// if (answer3 === 2) {
//   currentScore += 2;
// }
// console.log(currentScore);
