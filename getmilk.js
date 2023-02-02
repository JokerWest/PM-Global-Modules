//GetMilk
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