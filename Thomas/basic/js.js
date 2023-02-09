var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

const sandwichesf = JSON.parse(sandwiches);
const friesf = JSON.parse(fries);
console.log(sandwichesf, friesf);
document.getElementById("result").innerHTML += "My favorite sandwich is a " + " " + sandwichesf.sandwich + " which has approximately  " + sandwichesf.calories + " calories" + ", along with it I enjoy eating " + friesf.fries_size + "which have about " + friesf.calories + " calories";