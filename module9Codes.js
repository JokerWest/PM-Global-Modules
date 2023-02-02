var dogAge = prompt("How old is your dog?");

var humanAge = ((dogAge - 2)* 4) + 21;

alert("Your dog is " + humanAge + " years old in human years");


// var money = prompt("How much do you give the robot?"); this line will coflict with written code
var price = prompt("How much does it cost?");
var bottles = Math.floor(money/price);
function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + bottles+ " bottles milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return calcChange(money,price);
  }

function calcChange(moneyGiven,botPrice){
  var change = moneyGiven % botPrice;
  return change;
} 
getMilk(); //insert any numeric value into the function
console.log("Hello owner, your change is " + getMilk()+ " change.")


function timeLeft(age){
  var yearsLeft = 90-age;
  var days = yearsLeft *365;
  var weeks = yearsLeft *52;
  var months = yearsLeft *12;
console.log("you have "+ days +" days, "+ weeks +" weeks, and "+ months +" months left.");
}
var age = prompt("What is your age?")
timeLeft(age);

 
var bmi = bmiCalculator(65,1.8);
function bmiCalculator(weight, height) {
    var results = weight/Math.pow(height,2);
    return results;
}
console.log(bmi);