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