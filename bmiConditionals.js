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