function bmiCalculator (weight, height) {
    var bmi = weight/Math.pow(height,2);

    
    if (bmi<=18.5){
        bmi= "Your BMI is " + bmi + ", so you are underweight.";
    }
    else if (bmi >= 18.5 && bmi <= 24.9){
        bmi= "Your BMI is " + bmi + ", so you have a normal weight.";
    }
    
    else if (bmi>24.9) {
    bmi = "Your BMI is " + bmi  + ", so you are overweight.";
    }
return bmi;

}
bmiCalculator(40,2);
