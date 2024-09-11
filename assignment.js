




// function calculateTax(income, expenses) {
//     if(income < 0 || expenses < 0 || income < expenses) {
//         return  "Invalid Input";
//     }
//     const profit = income - expenses;
//     const tax = profit * .20;
//     return tax;
// }
// let result = calculateTax(444, 78);
// console.log(result);








function sendNotification(email) {
    let emailArray = email.split("@");
    let userName = emailArray[0];
    let domainName = emailArray[1];
    if(email.indexOf('@') === -1) {
        return  "Invalid Email";
    }
    let notificationMessage = userName + " sent you an email from " + domainName;
    return notificationMessage;
}
let str = "sadia8icloud.com";
let result = sendNotification(str);
console.log(result)

