




function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || income < expenses) {
        return  "Invalid Input";
    }
    const remainingTaka = income - expenses;
    const tax = remainingTaka * .20;
    return tax;
}
let result = calculateTax(10000, 3000);
console.log(result);
