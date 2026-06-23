type Result = "Underweight" | "Normal" | "Overweight" | "Obese";
function calculateBmi(cm: number, kg: number): Result {
    const firstEquation = cm ** 2;
    const second = kg / firstEquation;
    const last = second * 10000;
    if (last <= 18.4){
        return "Underweight";
    } if (last <= 24.9){
        return "Normal";
    } else if (last <= 39.9){
        return "Overweight";
    } else { return "Obese" }
} 
console.log(calculateBmi(172, 44), " range");