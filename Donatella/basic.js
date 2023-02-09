//ex 1

var sandwiches = `{ 
    "sandwich": "hamburger", 
    "calories": "260" 
}`;
var fries = `{ 
    "fries_size": "Large French Fries", 
    "calories": "570" 
}`;

const mydata = JSON.parse(sandwiches);
const mydata2 = JSON.parse(fries);
console.log(mydata);
console.log(mydata2);


document.getElementById("text").innerHTML += "My favorite sandwich is a " + mydata.sandwich + " which has approximately " + mydata.calories + " calories, along with it I enjoy eating " + mydata2.fries_size + " which have about " + mydata2.calories + " calories" + "<hr>";