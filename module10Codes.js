// Mini Love Calc
var matchRatio = Math.floor(Math.random() * 100) + 1 ;
var name1 = prompt("Enter your name:");
var name2 = prompt("Enter your love interests name:");

if (matchRatio===100) {
    alert("You "+ name1 + " and " + name2 +  "are a perfect match." );
}
if (70 <= matchRatio && matchRatio < 100) {
    alert("You and " + name2 + " are very in love." );
}
if (50 <= matchRatio && matchRatio < 70) {
    alert("Your love score is " + matchRatio);
}
if (40 <= matchRatio && matchRatio < 50) {
    alert("You need to put in some effort,your score is " + matchRatio);
}
if(matchRatio < 40){
    alert(name1 + " and " + name2 +  " are a horrible match at " + matchRatio + " compatible" );
}

// BMI Conditionals
function bmiCalculator (weight, height) {
    var bmi = weight/Math.pow(height,2);
    if(bmi > 24.9){
        return "Your BMI is " + bmi + ", so you are overweight.";
        }   
        
    if(bmi > 18.5 && bmi < 24.9){
        return "Your BMI is " + bmi + ", so you have a normal weight."; 
        }    
        
    if (bmi <= 18.5){
        return "Your BMI is " + bmi + ", so you are underweight.";
        }
}

// Leap Year Calc
function leapYearCalculator (year) {
    var year = prompt("Input a year to calculate if it is a leap year:");
    if (year % 4 === 0 && year % 100!== 0 && year % 400!== 0 ){
        return alert("The year " + year + " is a leap year.");
    } else{
        return alert("The year " + year + " is not a leap year.");
    }
}
leapYearCalculator();


// Guest List
var guestList = ["mark","dara","peter","bolu","angela","baah","williams"];
var guestName = prompt("Enter your name:");
if (guestList.includes(guestName) == true){
    alert(guestName + " is in the guest list.");
} else{
    alert(guestName + " is not in the guest list.");
}


// FizzBuzz
var output = [];
var i = 1;
//output.push(i);//adds element into array as last index
function fizzBuzz(){
    if (i % 3 === 0 && i % 5 != 0){
        output.push("Fizz");
    }
    else if (i % 5 === 0 && i % 3 != 0){
        output.push("Buzz");
    }
    else if (i % 3 === 0 && i % 5 === 0){
        output.push("FizzBuzz");
    }
    else{
        output.push(i);
    }
    i++;
    console.log(output)
}


// Who's buying lunch
function lunchBuyer(){
   var buyer = Math.floor(Math.random() * guestList.length);
   return guestList[buyer] + " is going to buy lunch today!"
}

//fibonacci sequence
var fibOutput = [];

function fibonacciGenerator(n){
    if (n === 1){
        fibOutput = [0];
        return fibOutput;
    }
    if(n===2){
        fibOutput = [0,1];
        return fibOutput;
    }
    if(n > 2){
        fibOutput.push(fibonacciGenerator(n-1) + fibonacciGenerator(n-2));
    }
}