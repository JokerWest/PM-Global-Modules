//fibonacci sequence
function fibonacciGenerator(n){
    if (n === 1){
        fibOutput = [0];
        return fibOutput;
    }
   else if(n===2){
        fibOutput = [0, 1];
        return fibOutput;
    }
    else {
        fibOutput = [0, 1];
        for (let i = 2; i < n; i++) {
           fibOutput.push(fibOutput[fibOutput.length - 2] + fibOutput[fibOutput.length - 1]);
        }
       
        // fibOutput.push(fibonacciGenerator(n-1) + fibonacciGenerator(n-2));
    }
   return fibOutput;
}