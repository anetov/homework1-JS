//1-st task
let firstname = prompt("Как вас зовут? ", '');
alert(`Привет, ${firstname}`);

//2-nd task
const currentYear = 2023;
let bornYear = prompt("Ваш год рождения: ", "");
let difference = currentYear - bornYear;
alert(`Вам ${difference} лет`);

//3-rd task
let squareSideLenght = prompt('Укажите длину стороны квадрата: ', '');
let perimeterofSquare = squareSideLenght * 4;
alert(`Периметр квадрата  ${perimeterofSquare} сантиметров`);

//4-th task
let circleRadius = prompt("Укажите радиус окружности: ", '');
let circleArea = Math.PI * Math.pow(circleRadius, 2);
alert(`Площадь окружности ${circleArea} сантиметров в квадрате`);

//5-th task
let distance, time, speed;
distance = prompt(`Расстояние между городами в км: `,);
time = prompt(`Укажите время в часах: `);
speed = distance / time;
alert(`Скорость, с которой надо двигаться: ${speed} км/ч`);

//6-th task
const exchange = 1.06;
let dollar = prompt("Курс доллара: ");
let euro = dollar * exchange;
alert(`Курс евро к доллару: ${euro}`)