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